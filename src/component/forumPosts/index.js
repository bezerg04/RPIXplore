// /src/component/forumPosts/index.js
import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/src/firebase';

const ForumPosts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch forum posts from NodeBB or a mock API for now
    fetch('/api/forum/posts') // Replace with actual NodeBB API endpoint
      .then(response => response.json())
      .then(data => setPosts(data));

    // Fetch user data from Firestore
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const getUserData = (uid) => users.find(user => user.uid === uid) || {};

  return (
    <div className="container mx-auto">
      {posts.map(post => {
        const userData = getUserData(post.userId); // Assuming post.userId contains the UID of the user who created the post
        return (
          <Card key={post.id} className="mb-4">
            <div className="flex items-center mb-4">
              <img src={userData.avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
                <p className="text-sm text-gray-600">{userData.role}</p>
              </div>
            </div>
            <p className="font-normal text-gray-700">{post.content}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default ForumPosts;
