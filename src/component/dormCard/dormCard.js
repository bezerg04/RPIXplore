'use client';
import { Card } from 'flowbite-react';
import Link from 'next/link';


const DormCard = ({ dormData }) => {
  const { dormName, dormType, dormImg, dormLink, address, location } = dormData; 

  const handleClick = () => {
    // Store dormName in localStorage
    localStorage.setItem('dormName', dormName);
  };

  return (
    <div onClick={handleClick}>
      <Link href={"/indi"} passHref>
        <div className="h-80 flex flex-col border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <div style={{ height: '60%', overflow: 'hidden' }} className="flex-shrink-0">
            <img src={dormImg} alt={dormName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='rounded-t-lg'/>
          </div>
          <div className="flex-grow flex flex-col justify-between p-2"> {/* Adjusted padding */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-0 InterBold"> {/* Added bottom margin */}
              {dormName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 leading-relaxed mb-0 Inter"> {/* Added location */}
              {location}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 leading-relaxed mb-0"> {/* Added address */}
              {address}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 leading-relaxed mb-0"> {/* Adjusted line height and bottom margin */}
              {dormType}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DormCard;
