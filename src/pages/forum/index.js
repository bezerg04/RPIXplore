import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import { useAuth } from "../../context/AuthContext";

export default function Forum() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({});
  const [replyInput, setReplyInput] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchPosts();
  }, []);

  const fetchComments = async (postId) => {
    const commentsQuery = query(collection(db, "comments"), where("postId", "==", postId));
    const querySnapshot = await getDocs(commentsQuery);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const handleCreatePost = async () => {
    if (!newPost.trim()) {
      alert("Post cannot be empty!");
      return;
    }
    try {
      const newDoc = await addDoc(collection(db, "posts"), {
        title: newPost,
        content: "",
        author: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        },
        createdAt: new Date(),
        upvotes: 0,
        downvotes: 0,
        voters: {},
        greenlighted: false,
      });

      setPosts((prevPosts) => [
        ...prevPosts,
        {
          id: newDoc.id,
          title: newPost,
          content: "",
          author: { uid: user.uid, displayName: user.displayName, email: user.email },
          createdAt: new Date(),
          upvotes: 0,
          downvotes: 0,
          voters: {},
          greenlighted: false,
        },
      ]);
      setNewPost("");
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  const handleCreateComment = async (postId, parentId = null) => {
    const commentInput = parentId ? replyInput[parentId] : newComment[postId];
    if (!commentInput?.trim()) {
      alert("Comment cannot be empty!");
      return;
    }
    try {
      await addDoc(collection(db, "comments"), {
        postId,
        content: commentInput,
        author: {
          uid: user.uid,
          displayName: user.displayName,
        },
        createdAt: new Date(),
        parentId,
        upvotes: 0,
        downvotes: 0,
        voters: {},
      });

      if (parentId) {
        setReplyInput((prev) => ({ ...prev, [parentId]: "" }));
      } else {
        setNewComment((prev) => ({ ...prev, [postId]: "" }));
      }

      const updatedComments = await fetchComments(postId);
      setComments((prev) => ({ ...prev, [postId]: updatedComments }));
      alert("Comment added!");
    } catch (error) {
      console.error("Error creating comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  const loadComments = async (postId) => {
    const postComments = await fetchComments(postId);
    setComments((prev) => ({ ...prev, [postId]: postComments }));
  };

  const handleCommentVote = async (commentId, postId, type) => {
    try {
      const commentRef = doc(db, "comments", commentId);
      const postComments = comments[postId];
      const comment = postComments.find((c) => c.id === commentId);

      const currentVote = comment.voters?.[user.uid];

      let updatedUpvotes = comment.upvotes || 0;
      let updatedDownvotes = comment.downvotes || 0;
      let updatedVoters = { ...comment.voters };

      if (currentVote === type) {
        if (type === "upvote") {
          updatedUpvotes -= 1;
        } else {
          updatedDownvotes -= 1;
        }
        delete updatedVoters[user.uid];
      } else {
        if (currentVote === "upvote") {
          updatedUpvotes -= 1;
          updatedDownvotes += 1;
        } else if (currentVote === "downvote") {
          updatedDownvotes -= 1;
          updatedUpvotes += 1;
        } else {
          if (type === "upvote") {
            updatedUpvotes += 1;
          } else {
            updatedDownvotes += 1;
          }
        }
        updatedVoters[user.uid] = type;
      }

      await updateDoc(commentRef, {
        upvotes: updatedUpvotes,
        downvotes: updatedDownvotes,
        voters: updatedVoters,
      });

      const updatedComments = postComments.map((c) =>
        c.id === commentId
          ? { ...c, upvotes: updatedUpvotes, downvotes: updatedDownvotes, voters: updatedVoters }
          : c
      );

      setComments((prev) => ({ ...prev, [postId]: updatedComments }));
    } catch (error) {
      console.error("Error updating comment votes:", error);
    }
  };

  const renderComments = (postId, parentId = null) => {
    const postComments = comments[postId] || [];
    const filteredComments = postComments.filter((comment) => comment.parentId === parentId);

    return filteredComments.map((comment) => (
      <div key={comment.id} style={{ marginLeft: parentId ? "40px" : "20px", borderLeft: "1px solid #ccc", paddingLeft: "10px" }}>
        <p>{comment.content}</p>
        <p>By: {comment.author.displayName}</p>
        <p>Upvotes: {comment.upvotes || 0}</p>
        <p>Downvotes: {comment.downvotes || 0}</p>
        {user && (
          <div>
            <button onClick={() => handleCommentVote(comment.id, postId, "upvote")}>Upvote</button>
            <button onClick={() => handleCommentVote(comment.id, postId, "downvote")}>Downvote</button>
            <button onClick={() => setReplyInput((prev) => ({ ...prev, [comment.id]: "" }))}>
              Reply
            </button>
            {replyInput[comment.id] !== undefined && (
              <div>
                <textarea
                  value={replyInput[comment.id] || ""}
                  onChange={(e) =>
                    setReplyInput((prev) => ({ ...prev, [comment.id]: e.target.value }))
                  }
                  placeholder="Write your reply..."
                />
                <button onClick={() => handleCreateComment(postId, comment.id)}>Reply</button>
              </div>
            )}
          </div>
        )}
        {renderComments(postId, comment.id)}
      </div>
    ));
  };

  return (
    <div>
      <h1>Forum</h1>
      {user && (
        <div>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write your post here..."
          />
          <button onClick={handleCreatePost}>Post</button>
        </div>
      )}
      <div>
        <h2>All Posts</h2>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h3>{post.title}</h3>
            <p>By: {post.author.displayName}</p>
            <p>Upvotes: {post.upvotes}</p>
            <p>Downvotes: {post.downvotes}</p>
            <button onClick={() => loadComments(post.id)}>Load Comments</button>
            {user && (
              <div>
                <textarea
                  value={newComment[post.id] || ""}
                  onChange={(e) =>
                    setNewComment((prev) => ({ ...prev, [post.id]: e.target.value }))
                  }
                  placeholder="Write a comment..."
                />
                <button onClick={() => handleCreateComment(post.id)}>Comment</button>
              </div>
            )}
            <div>
              <h4>Comments:</h4>
              {renderComments(post.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
