'use client';
import logo from './logo.png'
import Link from 'next/link';
import { Navbar } from 'flowbite-react';


export default function NavBar({ activeLink }) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="./">
        <img src={logo.src} className="mr-3 h-9 sm:h-9 " alt="RPIXplore Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">RPIXplore</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={activeLink === 'Home'}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#" active={activeLink === 'Forum'}>
          Forum
        </Navbar.Link>
        <Navbar.Link href="#" active={activeLink === 'Resources'}>
          Resources
        </Navbar.Link>
        <Navbar.Link href="/dorms" active={activeLink === 'Dorms'}>
          Dorms
        </Navbar.Link>
        <Navbar.Link href="#" active={activeLink === 'Login'}>
          Login
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
