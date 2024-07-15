'use client';
import logo from './logo.png'
import logo2 from './logo2.png'
import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import '../../app/globals.css';

export default function NavBar({ activeLink }) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="./">
        <img src={logo2.src} className="ml-1 mr-2" style={{ height: '3.25rem' }} alt="RPIXplore Logo" />
        <span className="InterBold text-2xl">RPIXplore</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='mr-3'>
        <Navbar.Link href="/" active={activeLink === 'Home'} className="Inter text-base">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/forum" active={activeLink === 'Forum'} className="Inter text-base">
          Forum
        </Navbar.Link>
        <Navbar.Link href="/resources" active={activeLink === 'Resources'} className="Inter text-base">
          Resources
        </Navbar.Link>
        <Navbar.Link href="/dorms" active={activeLink === 'Dorms'} className="Inter text-base">
          Dorms
        </Navbar.Link>
        <Navbar.Link href="#" active={activeLink === 'Login'} className="Inter text-base">
          Login
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
