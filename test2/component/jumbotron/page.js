'use client';
import Link from 'next/link';
import jumbopic from './jumbopic.png';


export default function Jumbotron() {
  return (
    <div className="relative w-full bg-center bg-no-repeat" style={{ paddingTop: 'calc(100% / (aspect-ratio))' }}>
      <img src={jumbopic.src} alt="" className="top-0 left-0 w-full h-auto" />
    </div>
  );
}