'use client'
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, storage } from '@/src/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/router';
import { Button, Alert } from 'flowbite-react';

const CreatePost = () => {
  const [user] = useAuthState(auth);
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      router.push('/forum/signup');
      return;
    }

    if (content.trim() === '') {
      setError('Post content cannot be empty.');
      return;
    }

    try {
      let imageUrl = null;
      if (image) {
        const imageRef = ref(storage, `images/${user.uid}/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const response = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: user.uid,
          username: user.displayName || user.email,
          content,
          imageUrl,
          avatar: user.photoURL,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      setContent('');
      setImage(null);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 border border-gray-200 rounded-lg shadow-md">
      {error && (
        <Alert
          color="failure"
          onDismiss={() => setError(null)}
        >
          <span>
            <span className="font-medium">Error:</span> {error}
          </span>
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows="5"
        ></textarea>
        <input type="file" onChange={handleImageUpload} />
        {image && <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-auto mt-4" />}
        <Button type="submit" className="w-full" color="dark">
          {user ? 'Post' : 'Sign Up to Post'}
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
