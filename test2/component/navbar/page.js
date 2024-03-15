'use client';
import logo from './logo.png'
import Link from 'next/link';
import { Navbar } from 'flowbite-react';


export default function NavBar() {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand as={Link} href="./">
      <img src={logo.src} className="mr-3 h-9 sm:h-9 " alt="RPIXplore Logo" />
      <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">RPIXplore</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="./" active>
        Home
      </Navbar.Link>
      <Navbar.Link as={Link} href="#">
        Forum
      </Navbar.Link>
      <Navbar.Link href="#">Resources</Navbar.Link>
      <Navbar.Link href="./dorms">Dorms</Navbar.Link>
      <Navbar.Link href="#">Login</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}
