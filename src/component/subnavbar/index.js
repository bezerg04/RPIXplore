import React from 'react';
import { Navbar } from 'flowbite-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase';
import { signOut } from 'firebase/auth';

const SubNavBar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Navbar>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Forum
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/forum">Home</Navbar.Link>
        {!user && (
          <>
            <Navbar.Link href="/forum/signup">Sign Up</Navbar.Link>
            <Navbar.Link href="/forum/login">Login</Navbar.Link>
          </>
        )}
        {user && (
          <>
            <Navbar.Link href="/forum/createpost">Create Post</Navbar.Link>
            <Navbar.Link 
              as="button" 
              onClick={handleSignOut} 
              className=" hover:text-red-500"
            >
              Sign Out
            </Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SubNavBar;
