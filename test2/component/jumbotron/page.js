'use client';
import Link from 'next/link';

const Jumbotron = ({ imageSrc }) => {
  return (
    <div className="relative w-full" style={{ paddingTop: '33.333%' }}> 
      <img src={imageSrc} alt="barton hall" className="absolute top-0 left-0 w-full h-full object-cover" />
    </div>
    
  );
};

export default Jumbotron;
