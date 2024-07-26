'use client'
import React, { useState, useEffect } from 'react';
import { auth } from '@/src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from 'flowbite-react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [user] = useAuthState(auth);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/getPosts');
      if (response.ok) {
        const postsData = await response.json();
        setPosts(postsData);
      }
    }

    fetchPosts();
  }, []);

  const handleLike = async (post) => {
    const updatedLikes = post.likes?.includes(user.uid)
      ? post.likes.filter((uid) => uid !== user.uid)
      : [...(post.likes || []), user.uid];

    await fetch('/api/updatePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: post.id,
        updates: { likes: updatedLikes },
      }),
    });

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id ? { ...p, likes: updatedLikes } : p
      )
    );
  };

  const handleDislike = async (post) => {
    const updatedDislikes = post.dislikes?.includes(user.uid)
      ? post.dislikes.filter((uid) => uid !== user.uid)
      : [...(post.dislikes || []), user.uid];

    await fetch('/api/updatePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: post.id,
        updates: { dislikes: updatedDislikes },
      }),
    });

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id ? { ...p, dislikes: updatedDislikes } : p
      )
    );
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="container mx-auto mt-8">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border border-gray-200 rounded-lg shadow-md mb-4">
          <div className="flex items-center mb-4">
            {post.avatar && (
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(post.avatar)}`}
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div>
              <p className="font-semibold">{post.username}</p>
              <p className="text-sm text-gray-500">{new Date(post.createdAt?.seconds * 1000).toLocaleString()}</p>
            </div>
          </div>
          <p className="mb-4">{post.content}</p>
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post Image" className="w-full h-auto rounded-md" />
          )}
          <div className="flex items-center mt-4">
            <Button onClick={() => handleLike(post)} color={post.likes?.includes(user?.uid) ? 'blue' : 'light'} className="mr-2">
              Like ({post.likes?.length || 0})
            </Button>
            <Button onClick={() => handleDislike(post)} color={post.dislikes?.includes(user?.uid) ? 'red' : 'light'} className="mr-2">
              Dislike ({post.dislikes?.length || 0})
            </Button>
            <Button onClick={() => handleSelectPost(post)} color="light">
              Comments ({post.comments?.length || 0})
            </Button>
          </div>
        </div>
      ))}
      {selectedPost && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end">
          <div className="w-1/3 bg-white p-4 h-full overflow-y-scroll">
            <button onClick={() => setSelectedPost(null)} className="text-gray-600 mb-4">Close</button>
            <h2 className="text-xl font-bold mb-4">{selectedPost.content}</h2>
            {selectedPost.imageUrl && (
              <img src={selectedPost.imageUrl} alt="Post Image" className="w-full h-auto rounded-md mb-4" />
            )}
            <div className="mb-4">
              {selectedPost.comments?.map((comment, index) => (
                <div key={index} className="p-2 border-b border-gray-200">
                  <p className="font-semibold">{comment.username}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
            {user && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const comment = e.target.comment.value;
                  const updatedComments = [
                    ...(selectedPost.comments || []),
                    { uid: user.uid, username: user.displayName || user.email, text: comment, createdAt: new Date() }
                  ];
                  await fetch('/api/updatePost', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      postId: selectedPost.id,
                      updates: { comments: updatedComments },
                    }),
                  });
                  setSelectedPost((prevPost) => ({ ...prevPost, comments: updatedComments }));
                  e.target.comment.value = '';
                }}
              >
                <textarea name="comment" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="Write a comment..."></textarea>
                <Button type="submit" color="dark">Post Comment</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
