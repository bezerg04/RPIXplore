import React, { useState } from "react";

export default function Comment({
  comment,
  user,
  isAdmin,
  handleReply,
  children,
  showPendingNote,
}) {
  const [replyInput, setReplyInput] = useState("");

  const handleReplySubmit = () => {
    if (replyInput.trim()) {
      handleReply(replyInput, comment.id);
      setReplyInput("");
    }
  };

  return (
    <div
      className={`p-4 mb-2 rounded-lg border ${
        comment.greenlighted
          ? "bg-green-100 border-green-400"
          : "bg-yellow-100 border-yellow-400"
      }`}
      style={{ marginLeft: comment.parentId ? "20px" : "0" }}
    >
      <p className="text-gray-800">{comment.content}</p>
      <p className="text-sm text-gray-600">By: {comment.author.displayName}</p>
      {showPendingNote && (
        <p className="text-yellow-600 italic">Pending Approval</p>
      )}
      {user && (
        <div className="mt-2">
          <textarea
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
            placeholder="Write a reply..."
            className="w-full p-2 border rounded-md"
          />
          <button
            onClick={handleReplySubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700"
          >
            Reply
          </button>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
