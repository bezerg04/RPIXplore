'use client';
import logo2 from './logo2.png';
import Link from 'next/link';
import { Navbar, Avatar, Dropdown, Button } from 'flowbite-react';
import { useAuth } from '../../context/AuthContext';

export default function NavBar({ activeLink }) {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <Navbar fluid rounded className="px-4 py-2">
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center">
          <Navbar.Brand as={Link} href="/" className="flex items-center">
            <img
              src={logo2.src}
              className="ml-1 mr-2"
              style={{ height: '3.25rem' }}
              alt="RPIXplore Logo"
            />
            <span className="InterBold text-2xl">RPIXplore</span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="flex items-center ml-6 space-x-4">
            <Navbar.Link href="/" active={activeLink === 'Home'} className="Inter text-base">
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="/dorms" active={activeLink === 'Dorms'} className="Inter text-base">
              Dorms
            </Navbar.Link>
            <Navbar.Link as={Link} href="/forum" active={activeLink === 'Forum'} className="Inter text-base">
              Forum
            </Navbar.Link>
            <Navbar.Link as={Link} href="/resources" active={activeLink === 'Resources'} className="Inter text-base">
              Resources
            </Navbar.Link>
          </Navbar.Collapse>
        </div>

        {/* Right Section: Avatar or Sign-In Button */}
        <div>
          {!user ? (
            <Button
              onClick={signInWithGoogle}
              gradientDuoTone="greenToBlue"
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
                  alt={user.displayName}
                  img={user.photoURL}
                  rounded
                  className="ml-4"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block text-sm font-medium truncate">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown>
          )}
        </div>
      </div>
    </Navbar>
  );
}
