import React, { useState, useEffect } from "react";
import { doc, updateDoc, deleteDoc, collection, onSnapshot } from "firebase/firestore";
import { Alert, Button } from "flowbite-react";
import { db } from "../../utils/firebase";

export default function AdminControls({ posts, setPosts }) {
  const [pendingComments, setPendingComments] = useState([]);
  const [greenlitComments, setGreenlitComments] = useState([]);
  const [notification, setNotification] = useState(null); // For alerts

  useEffect(() => {
    const unsubscribePosts = onSnapshot(collection(db, "posts"), (snapshot) => {
      const updatedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(updatedPosts);
    });

    const unsubscribePendingComments = onSnapshot(
      collection(db, "comments"),
      (snapshot) => {
        const allComments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingComments(
          allComments.filter((comment) => !comment.greenlighted)
        );
        setGreenlitComments(
          allComments.filter((comment) => comment.greenlighted)
        );
      }
    );

    return () => {
      unsubscribePosts();
      unsubscribePendingComments();
    };
  }, [setPosts]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
  };

  const handleGreenlightPost = async (id) => {
    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, { greenlighted: true });
      showNotification("success", "Post greenlighted successfully!");
    } catch (error) {
      console.error("Error greenlighting post:", error);
      showNotification("error", "Failed to greenlight post.");
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const postRef = doc(db, "posts", id);
      await deleteDoc(postRef);
      showNotification("success", "Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      showNotification("error", "Failed to delete post.");
    }
  };

  const handleGreenlightComment = async (id) => {
    try {
      const commentRef = doc(db, "comments", id);
      await updateDoc(commentRef, { greenlighted: true });
      showNotification("success", "Comment greenlighted successfully!");
    } catch (error) {
      console.error("Error greenlighting comment:", error);
      showNotification("error", "Failed to greenlight comment.");
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const commentRef = doc(db, "comments", id);
      await deleteDoc(commentRef);
      showNotification("success", "Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      showNotification("error", "Failed to delete comment.");
    }
  };

  return (
    <div className="space-y-6">
      {notification && (
        <Alert
          color={notification.type === "success" ? "green" : "red"}
          onDismiss={() => setNotification(null)}
        >
          {notification.message}
        </Alert>
      )}

      {/* Pending Posts */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Pending Posts</h2>
        {posts
          .filter((post) => !post.greenlighted)
          .map((post) => (
            <div
              key={post.id}
              className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg mb-2 shadow"
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.content}</p>
              <p className="text-sm text-gray-600">By: {post.author.displayName}</p>
              <div className="mt-2 flex space-x-2">
                <Button
                  onClick={() => handleGreenlightPost(post.id)}
                  color="success"
                >
                  Greenlight
                </Button>
                <Button onClick={() => handleDeletePost(post.id)} color="failure">
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>

      {/* Greenlit Posts */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Greenlit Posts</h2>
        {posts
          .filter((post) => post.greenlighted)
          .map((post) => (
            <div
              key={post.id}
              className="p-4 bg-green-100 border border-green-400 rounded-lg mb-2 shadow"
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.content}</p>
              <p className="text-sm text-gray-600">By: {post.author.displayName}</p>
              <div className="mt-2 flex space-x-2">
                <Button onClick={() => handleDeletePost(post.id)} color="failure">
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>

      {/* Pending Comments */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Pending Comments</h2>
        {pendingComments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg mb-2 shadow"
          >
            <p>{comment.content}</p>
            <p className="text-sm text-gray-600">By: {comment.author.displayName}</p>
            <div className="mt-2 flex space-x-2">
              <Button
                onClick={() => handleGreenlightComment(comment.id)}
                color="success"
              >
                Greenlight
              </Button>
              <Button
                onClick={() => handleDeleteComment(comment.id)}
                color="failure"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Greenlit Comments */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Greenlit Comments</h2>
        {greenlitComments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-green-100 border border-green-400 rounded-lg mb-2 shadow"
          >
            <p>{comment.content}</p>
            <p className="text-sm text-gray-600">By: {comment.author.displayName}</p>
            <div className="mt-2 flex space-x-2">
              <Button
                onClick={() => handleDeleteComment(comment.id)}
                color="failure"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
