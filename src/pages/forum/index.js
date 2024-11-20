import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../context/AuthContext";
import Post from "../../component/Post/Post";
import CreatePost from "../../component/CreatePost/CreatePost";
import AdminControls from "../../component/AdminControls/AdminControls";
import NavBar from "@/src/component/navbar/page";
import Jumbotron2 from "@/src/component/JumbotronWithText/page";
import jumbo from '@/src/component/JumbotronWithText/jumbo.png';
import one from '@/src/component/JumbotronWithText/one.jpg';
import two from '@/src/component/JumbotronWithText/two.jpg';
import three from '@/src/component/JumbotronWithText/three.jpg';



export default function Forum() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const adminEmails = ["gabrielbezerra0704@gmail.com"];
  const isAdmin = adminEmails.includes(user?.email);

  const fetchPosts = async () => {
    const postsQuery = collection(db, "posts");
    const querySnapshot = await getDocs(postsQuery);
    setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.greenlighted || post.author?.uid === user?.uid || isAdmin
  );

  return (
    <div>
      <NavBar activeLink="Forum" />
      <Jumbotron2
        titleText="Welcome to RPXplore!"
        subtitleText="Explore the campus and learn more about what it has to offer."
        lowerText={`Forum,\nwith RPIXplore`}
        backgroundImage={two.src}
        showBottom={true}
        showTop={false}
      />
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Forum</h1>
      {user && <CreatePost user={user} isAdmin={isAdmin} onPostCreated={fetchPosts} />
    }
      <div>
        {isAdmin ? (
          <AdminControls posts={posts} setPosts={setPosts} />
        ) : (
          filteredPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
              user={user}
              isAdmin={isAdmin}
              className={`${
                post.greenlighted ? "bg-green-100" : "bg-yellow-100"
              } border p-4 rounded-md mb-4`}
            />
          ))
        )}
      </div>
    </div>
    </div>
  );
}
