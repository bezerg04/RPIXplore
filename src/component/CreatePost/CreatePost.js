import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Alert } from "flowbite-react"; // Import Flowbite Alert
import { db } from "../../utils/firebase";

export default function CreatePost({ user, onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState(null); // For alerts

  const handleCreatePost = async () => {
    if (!title.trim() || !content.trim()) {
      setNotification({ type: "error", message: "Both title and content are required!" });
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        author: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        },
        createdAt: new Date(),
        upvotes: 0,
        downvotes: 0,
        voters: {},
        greenlighted: false, // Posts default to unapproved
      });

      setTitle("");
      setContent("");
      setNotification({ type: "success", message: "Post created successfully! Awaiting approval." });

      if (onPostCreated) onPostCreated();
    } catch (error) {
      console.error("Error creating post:", error);
      setNotification({ type: "error", message: "Failed to create post. Please try again." });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {notification && (
        <Alert
          color={notification.type === "success" ? "green" : "red"}
          onDismiss={() => setNotification(null)}
        >
          {notification.message}
        </Alert>
      )}
      <h3 className="text-xl font-semibold mb-4">Create a Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded-lg"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded-lg"
        rows="4"
      />
      <button
        onClick={handleCreatePost}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Create Post
      </button>
    </div>
  );
}
