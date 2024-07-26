'use client'
import React, { useState } from 'react';
import { auth, provider } from '@/src/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import NavBar from '@/src/component/navbar/page';
import SubNavBar from '@/src/component/subnavbar';
import { Button, Alert } from 'flowbite-react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/forum'); // Redirect to forum page after login
    } catch (error) {
      console.error('Error during Google login:', error);
      setError(error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/forum'); // Redirect to forum page after login
    } catch (error) {
      console.error('Error during email login:', error);
      setError(error.message);
    }
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
        <form onSubmit={handleEmailLogin} className="w-full max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <Button type="submit" className="w-full mb-4" color="dark">
            Login
          </Button>
          <Button onClick={handleGoogleLogin} className="w-full" color="light">
            Login with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
