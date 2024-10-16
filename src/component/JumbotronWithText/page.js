import Image from 'next/image';
import React from 'react';


const Jumbotron2 = ({ titleText, subtitleText, lowerText, backgroundImage }) => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      {/* Text Box */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 2, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px', 
        borderRadius: '10px', 
        maxWidth: '600px', 
        width: '100%',
      }}>
        <h1>{titleText}</h1>
        <p>{subtitleText}</p>
      </div>

      {/* Background Image */}
      <div style={{ height: '500px', overflow: 'hidden' }}>
        <Image
          src={backgroundImage} // use the background image passed via props
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Lower Text */}
      <div style={{ 
        position: 'absolute', 
        bottom: '14%', 
        left: '18%', 
        transform: 'translateX(-50%)', 
        zIndex: 2, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px', 
        borderRadius: '0px', 
        width: '250px',
      }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>{lowerText}</h2>
      </div>
    </div>
  );
};

export default Jumbotron2;
