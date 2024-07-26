'use client';
import React, { useState } from 'react';
import { auth, db, provider } from '@/src/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import NavBar from '@/src/component/navbar/page';
import SubNavBar from '@/src/component/subnavbar';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';
import { Button, Alert } from 'flowbite-react';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(`user${Math.random().toString(36).substring(7)}`);
  const [role, setRole] = useState('student');
  const [avatar, setAvatar] = useState(createAvatar(style, { seed: 'initial' }));
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        username,
        role,
        avatar,
        createdAt: serverTimestamp(),
      });

      router.push('/forum/login'); // Redirect to login page after sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // Save user info in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        username: `user${Math.random().toString(36).substring(7)}`, // Generate a random username
        role,
        avatar: createAvatar(style, { seed: 'initial' }), // Generate an initial avatar
        createdAt: serverTimestamp(),
      });

      router.push('/forum'); // Redirect to forum page after sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGenerateAvatar = () => {
    const randomAvatar = createAvatar(style, { seed: Math.random().toString(36).substring(7) });
    setAvatar(randomAvatar);
  };

  return (
    <div>
      <NavBar activeLink="Forum" />
      <SubNavBar />
      <div className="container mx-auto mt-8">
        {error && (
          <Alert color="failure" onDismiss={() => setError(null)}>
            <span>
              <span className="font-medium">Error:</span> {error}
            </span>
          </Alert>
        )}
        <form onSubmit={handleSignUp} className="w-full max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <Button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-2 py-2 text-sm"
              color="light"
            >
              {showPassword ? 'Hide' : 'Show'}
            </Button>
            {password.length > 0 && password.length < 6 && (
              <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters.</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <Button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 text-sm"
              color="light"
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </Button>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <Button
              type="button"
              onClick={() => setUsername(`user${Math.random().toString(36).substring(7)}`)}
              className="mt-2"
              color="light"
            >
              Generate
            </Button>
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <div className="mb-4 text-center mx-auto w-1/2">
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(avatar)}`} alt="Avatar" className="w-24 h-24 mx-auto mb-4" />
            <Button onClick={handleGenerateAvatar} color="light" className="text-black">
              Generate New Avatar
            </Button>
          </div>
          <Button type="submit" className="w-full mb-4" color="dark">
            Sign Up
          </Button>
          <Button onClick={handleGoogleSignUp} className="w-full" color="light">
            Sign Up with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
