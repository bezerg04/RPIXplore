import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Alert } from "flowbite-react"; // Import Flowbite Alert
import { db } from "../../utils/firebase";

export default function CreatePost({ user, isAdmin, onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false); // Toggle for anonymous posting
  const [notification, setNotification] = useState(null); // For alerts

  const handleCreatePost = async () => {
    if (!title.trim() || !content.trim()) {
      setNotification({
        type: "error",
        message: "Both title and content are required!",
      });
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        author: isAdmin
          ? { displayName: "ADMIN", uid: null }
          : anonymous
          ? { displayName: "Anonymous", uid: user.uid }
          : { displayName: user.displayName, uid: user.uid },
        createdAt: new Date(),
        upvotes: 0,
        downvotes: 0,
        voters: {},
        greenlighted: isAdmin, // Admin posts are greenlit automatically
      });

      setTitle("");
      setContent("");
      setAnonymous(false);
      setNotification({
        type: "success",
        message: isAdmin
          ? "Post created successfully as ADMIN."
          : "Post created successfully! Awaiting approval.",
      });

      if (onPostCreated) onPostCreated();
    } catch (error) {
      console.error("Error creating post:", error);
      setNotification({
        type: "error",
        message: "Failed to create post. Please try again.",
      });
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
      {!isAdmin && ( // Only show toggle for non-admin users
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="anonymous"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="anonymous" className="text-sm text-gray-600">
            Post anonymously
          </label>
        </div>
      )}
      <button
        onClick={handleCreatePost}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Create Post
      </button>
    </div>
  );
}
