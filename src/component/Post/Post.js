import React, { useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  addDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import Comment from "../Comment/Comment";

export default function Post({ post, user, isAdmin }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [livePost, setLivePost] = useState(post);

  useEffect(() => {
    if (!post?.id) return;

    // Real-time listener for the post
    const postRef = doc(db, "posts", post.id);
    const unsubscribePost = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        setLivePost({ id: doc.id, ...doc.data() });
      } else {
        setLivePost(null);
      }
    });

    // Real-time listener for comments
    const commentsQuery = query(collection(db, "comments"), where("postId", "==", post.id));
    const unsubscribeComments = onSnapshot(commentsQuery, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribePost();
      unsubscribeComments();
    };
  }, [post.id]);

  const handleReply = async (replyContent, parentId) => {
    if (!replyContent.trim()) return;

    try {
      await addDoc(collection(db, "comments"), {
        postId: livePost.id,
        content: replyContent,
        author: {
          uid: user.uid,
          displayName: user.displayName,
        },
        createdAt: new Date(),
        parentId,
        upvotes: 0,
        downvotes: 0,
        voters: {},
        greenlighted: false, // Replies also need greenlighting
      });
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handleVote = async (id, type, isPost = true) => {
    const collectionName = isPost ? "posts" : "comments";
    const ref = doc(db, collectionName, id);

    const target = isPost ? livePost : comments.find((comment) => comment.id === id);
    if (!target) return;

    const currentVote = target.voters?.[user.uid];
    let updatedUpvotes = target.upvotes || 0;
    let updatedDownvotes = target.downvotes || 0;
    const updatedVoters = { ...target.voters };

    if (currentVote === type) {
      if (type === "upvote") updatedUpvotes -= 1;
      if (type === "downvote") updatedDownvotes -= 1;
      delete updatedVoters[user.uid];
    } else {
      if (currentVote === "upvote") updatedUpvotes -= 1;
      if (currentVote === "downvote") updatedDownvotes -= 1;
      if (type === "upvote") updatedUpvotes += 1;
      if (type === "downvote") updatedDownvotes += 1;
      updatedVoters[user.uid] = type;
    }

    try {
      await updateDoc(ref, {
        upvotes: updatedUpvotes,
        downvotes: updatedDownvotes,
        voters: updatedVoters,
      });
    } catch (error) {
      console.error("Error updating vote:", error);
    }
  };

  const handleCreateComment = async () => {
    if (!newComment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      await addDoc(collection(db, "comments"), {
        postId: livePost.id,
        content: newComment,
        author: {
          uid: user.uid,
          displayName: user.displayName,
        },
        createdAt: new Date(),
        parentId: null, // Top-level comment
        upvotes: 0,
        downvotes: 0,
        voters: {},
        greenlighted: false, // Comments default to unapproved
      });

      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  const renderComments = (parentId = null) => {
    const filteredComments = comments.filter(
      (comment) =>
        comment.parentId === parentId &&
        (isAdmin || comment.greenlighted || comment.author?.uid === user?.uid)
    );

    return filteredComments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        user={user}
        isAdmin={isAdmin}
        handleVote={(id, type) => handleVote(id, type, false)}
        handleReply={handleReply}
      >
        {renderComments(comment.id)} {/* Recursively render child comments */}
      </Comment>
    ));
  };

  if (!livePost) {
    return <p className="text-red-600 italic">This post has been deleted.</p>;
  }

  const isVisibleToUser =
    livePost.greenlighted || livePost.author?.uid === user?.uid || isAdmin;

  if (!isVisibleToUser) return null;

  return (
    <div
      className={`bg-white border p-4 rounded-md mb-4 shadow ${
        livePost.greenlighted ? "border-green-400" : "border-yellow-400"
      }`}
    >
      <h3 className="text-xl font-semibold">{livePost.title}</h3>
      <p>{livePost.content}</p>
      <p className="text-sm text-gray-600">
        By: {livePost.anonymous && !isAdmin && livePost.author?.uid !== user?.uid
          ? "Anonymous"
          : livePost.author?.displayName || "Unknown"}
      </p>

      {!livePost.greenlighted && livePost.author?.uid === user?.uid && (
        <p className="text-yellow-600 italic">Pending Approval</p>
      )}
      <p className="text-sm">
        Upvotes: {livePost.upvotes || 0} | Downvotes: {livePost.downvotes || 0}
      </p>
      {user && (
        <div className="mt-2">
          <button
            onClick={() => handleVote(livePost.id, "upvote", true)}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700"
          >
            Upvote
          </button>
          <button
            onClick={() => handleVote(livePost.id, "downvote", true)}
            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
          >
            Downvote
          </button>
        </div>
      )}
      <div className="mt-4">
        <h4 className="font-semibold">Comments</h4>
        {renderComments()}
      </div>
      {user && (
        <div className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full mb-2 px-3 py-2 border rounded-lg"
          />
          <button
            onClick={handleCreateComment}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Comment
          </button>
        </div>
      )}
    </div>
  );
}
