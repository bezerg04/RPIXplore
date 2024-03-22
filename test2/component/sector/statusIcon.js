'use client'
import greenCheck from './greencheck.png'; // Adjust path as necessary
import redX from './redx.png'; // Adjust path as necessary


function StatusIcon({ status }) {
  const imageSrc = status ? greenCheck : redX;
  const altText = status ? "Yes" : "No";

  return <img src={imageSrc} alt={altText} style={{ width: '20px', height: '20px' }} />;
}

export default StatusIcon;
