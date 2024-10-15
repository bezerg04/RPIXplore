import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-full p-4 border rounded-lg bg-gray-50">
      {/* Carousel Item */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {items.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 p-2 transform -translate-y-1/2 text-white rounded-full bg-gray-800 opacity-70 hover:bg-gray-600 transition duration-300 ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <HiChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === items.length - 1}
            className={`absolute top-1/2 right-0 p-2 transform -translate-y-1/2 text-white rounded-full bg-gray-800 opacity-70 hover:bg-gray-600 transition duration-300 ${
              currentIndex === items.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <HiChevronRight size={24} />
          </button>
        </>
      )}

      {/* Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;

// Usage Example
// <CustomCarousel items={[
//   <img src="image1.jpg" alt="Image 1" className="w-full h-full object-cover" />,
//   <img src="image2.jpg" alt="Image 2" className="w-full h-full object-cover" />,
//   <model-viewer src="model1.glb" className="w-full h-full" />
// ]} />