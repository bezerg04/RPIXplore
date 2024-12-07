'use client';
import Image from 'next/image';
import logo2 from './logo2.png';
import defaultAvatar from './defaultAvatar.jpg'; // Add a default avatar image
import Link from 'next/link';
import { Navbar, Avatar, Dropdown, Button } from 'flowbite-react';
import { useAuth } from '../../context/AuthContext';

export default function NavBar({ activeLink }) {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <Navbar fluid rounded className="px-4 py-3">
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Navbar.Brand as={Link} href="/" className="flex items-center">
            <div className="relative w-[56px] h-[56px] mr-2">
              <Image
                src={logo2}
                alt="RPIXplore Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <span className="InterBold text-2xl">RPIXplore</span>
          </Navbar.Brand>
        </div>

        {/* Right Section: Navigation Links and Authentication */}
        <div className="flex items-center space-x-10">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8 list-none">
            
              <Navbar.Link href="/" active={activeLink === 'Home'} className="Inter text-lg font-medium">
                Home
              </Navbar.Link>
            
            
              <Navbar.Link as={Link} href="/dorms" active={activeLink === 'Dorms'} className="Inter text-lg font-medium">
                Dorms
              </Navbar.Link>
            
            
              <Navbar.Link as={Link} href="/forum" active={activeLink === 'Forum'} className="Inter text-lg font-medium">
                Forum
              </Navbar.Link>
            
            
              <Navbar.Link as={Link} href="/resources" active={activeLink === 'Resources'} className="Inter text-lg font-medium">
                Resources
              </Navbar.Link>
            </div>
          

          {/* Sign-In Button or Avatar */}
          <div>
            {!user ? (
              <Button
                onClick={signInWithGoogle}
                gradientDuoTone="pinkToOrange"
                className="ml-4"
              >
                Sign in with Google
              </Button>
            ) : (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="Default User"
                    img={defaultAvatar.src} // Always use default avatar
                    rounded
                    className="ml-4 mr-4"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName || 'Guest User'}</span>
                  <span className="block text-sm font-medium truncate">
                    {user.email || 'guest@example.com'}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </Navbar>
  );
}
