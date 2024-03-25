'use client';
import { Card } from 'flowbite-react';
import Link from 'next/link';

const DormCard = ({ dormData }) => {
  const { dormName, dormType, dormImg, dormSize, dormLink } = dormData; 

  const handleClick = () => {
    // Store dormName in localStorage
    localStorage.setItem('dormName', dormName);
  };

  return (
    <div onClick={handleClick}>
  <Link href={`/indi`} passHref>
    <div className="max-w-sm h-full flex flex-col border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div style={{ height: '66.66%', overflow: 'hidden' }}>
        <img src={dormImg} alt="Meaningful alt text for an image that is not purely decorative" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='rounded-t-lg'/>
      </div>
      <div className="flex-grow flex flex-col justify-between" style={{ padding: '1rem' }}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {dormName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {dormType}
        </p>
        <div className="flex items-center font-normal text-gray-700 dark:text-gray-400">
          
          <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"/>
          </svg>
          <p className="text-sm">{dormSize} sqft</p>
        </div>
      </div>
    </div>
  </Link>
</div>

  );
};

export default DormCard;
