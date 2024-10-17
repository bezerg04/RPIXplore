import Image from 'next/image';
import React from 'react';

const Jumbotron2 = ({
  titleText,
  subtitleText,
  lowerText,
  backgroundImage,
  showTop = true,
  showBottom = true,
}) => {
  const renderLowerText = (text) => {
    const [firstLine, ...restLines] = text.split('\n');
    const remainingText = restLines.join(' ');

    return (
      <>
        <div
          style={{
            textAlign: 'left',
            fontSize: '40px',
            fontWeight: 600, // Inter Semibold weight
            marginBottom: '2px',
            lineHeight: '1.1',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {firstLine}
        </div>
        <div
          style={{
            textAlign: 'right',
            fontSize: '24px',
            fontWeight: 600, // Inter Semibold weight
            lineHeight: '1.1',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {remainingText}
        </div>
      </>
    );
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      {/* Top Text Box */}
      {showTop && (
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '10px',
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <h1 style={{ margin: 0, fontWeight: 600 }}>{titleText}</h1>
          <p style={{ margin: '5px 0', fontWeight: 600 }}>{subtitleText}</p>
        </div>
      )}

      {/* Background Image */}
      <div style={{ height: '500px', overflow: 'hidden' }}>
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Lower Text Box */}
      {showBottom && (
        <div
          style={{
            position: 'absolute',
            bottom: '14%',
            left: '18%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '0px',
            width: '320px',
          }}
        >
          {renderLowerText(lowerText)}
        </div>
      )}
    </div>
  );
};

export default Jumbotron2;
