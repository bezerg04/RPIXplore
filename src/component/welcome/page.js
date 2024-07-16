'use client';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';


export default function Welcome() {
  return (
    <div className="bg-gray-200				 flex flex-col items-center justify-center p-10 text-center">
      <h3 className="text-xl font-normal mt-4 mb-4">Welcome to RPIXplore!</h3>
      <p className="text-lg font-normal mb-4 max-w-5xl">RPIXplore is a website developed by RPI students as part of the Rensselaer Community Open Source class. We aim to provide more information into what the dorms at RPI are like. Visit the dorms page to browse dorms of all grade levels, with details specifics about what each dorm provides.</p>
      <p className="text-lg font-normal max-w-5xl">Still have questions? Visit the forum and ask! </p>
      <p className="text-lg font-normal mb-4 max-w-5xl">All members of the RPI community can feel free to ask and answer any questions they have.</p>
      
    </div>
  );
}
