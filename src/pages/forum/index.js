'use client'
import React from 'react';
import NavBar from '@/src/component/navbar/page';
import SubNavBar from '@/src/component/subnavbar';
import CreatePost from '@/src/component/CreatePost';
import PostList from '@/src/component/PostList';

export default function Forum() {
  return (
    <div>
      <NavBar activeLink="Forum" />
      <SubNavBar />
      <CreatePost />
      <PostList />
      {/* Additional content for the forum page */}
    </div>
  );
}
