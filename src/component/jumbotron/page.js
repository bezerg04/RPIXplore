'use client';
import Image from 'next/image';

const Jumbotron = ({ imageSrc }) => {
  return (
    <div className="relative w-full" style={{ paddingTop: '33.333%' }}> 
      <Image
        src={imageSrc}
        alt="barton hall"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default Jumbotron;
