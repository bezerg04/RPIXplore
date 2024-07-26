// /pages/api/forum/posts.js
export default function handler(req, res) {
    res.status(200).json([
      { id: 1, title: "Welcome to the Forum", content: "This is the first post!" },
      { id: 2, title: "Second Post", content: "Here's another post." },
      // Add more mock posts as needed
    ]);
  }
  