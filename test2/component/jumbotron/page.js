'use client';
import Link from 'next/link';

const Jumbotron = ({ imageSrc }) => {
  return (
    <div className="relative w-full bg-center bg-no-repeat" style={{ paddingTop: 'calc(100% / (aspect-ratio))' }}>
      <img src={imageSrc} alt="" className="top-0 left-0 w-full h-auto " />
      <div className='text-block absolute bottom-20 right-20 bg-black text-white p-5'>
        <h4>Nature</h4>
        <p>What a beautiful sunrise</p>
      </div>
    </div>
    
  );
};

export default Jumbotron;
