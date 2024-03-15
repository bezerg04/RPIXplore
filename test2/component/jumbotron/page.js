'use client';
import Link from 'next/link';

const Jumbotron = ({ imageSrc }) => {
  return (
    <div className="relative w-full bg-center bg-no-repeat" style={{ paddingTop: 'calc(100% / (aspect-ratio))' }}>
      <img src={imageSrc} alt="" className="top-0 left-0 w-full h-auto" />
    </div>
  );
};

export default Jumbotron;
