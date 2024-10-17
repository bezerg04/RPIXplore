import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import data from '../../../resources/json.json';
import CustomCarousel from '../Carousel/customcarousel';

export default function Sector({ sectionName = 'Quad' }) {
  const sectionData = data[sectionName];

  if (!sectionData) {
    return <div>Section data not found.</div>;
  }

  // Destructuring for easier access
  const { pricing, stacks, description, address, location, accessible, ac, dining, laundryInfo, img, resources } = sectionData;

  const handleScroll = (index) => {
    document.getElementById(`stack-${index}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Container for buttons with full width, centered content, and padding */}
      <div className=' flex justify-center items-center p-4'>
        {stacks && stacks.length > 1 && (
          <div className='flex gap-1 flex-wrap justify-center'>
            {stacks.map((stack, index) => (
              <Button key={index} color="gray" onClick={() => handleScroll(index)}>
                {stack.title}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div style={{ width: '96%' }} className='flex flex-row'>
          <div className="flex flex-col w-1/2 pl-2 mt-0 Inter">
            <h1 className='font-bold text-2xl '>{sectionName}</h1>

            <p><strong>Description:</strong> {description}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Accessible:</strong> {accessible ? 'Yes' : 'No'}</p>
            <p><strong>AC Available:</strong> {ac ? 'Yes' : 'No'}</p>
            <p><strong>Nearest Dining Hall:</strong> {dining}</p>
            <p><strong>Laundry Info:</strong> Located at {laundryInfo.location} with {laundryInfo.nWashers} washers and {laundryInfo.nDryers} dryers.</p>
            <p><strong>Pricing:</strong></p>
            <ul>
              <li>&emsp; Single: {pricing.single}</li>
              <li>&emsp; Double: {pricing.double}</li>
              <li>&emsp; Triple: {pricing.triple}</li>
            </ul>
          </div>
          
          {resources && resources.length > 0 ? (
            <div className="w-1/2 p-2 mb-1.5 pb-2.5 h-full"style={{ height: '450px' }}>
              <CustomCarousel
                items={resources.map((resource, index) => (
                  <div 
                    key={index}
                    className="relative w-full h-full"
                  >
                    <img
                      src={resource}
                      alt={`Resource ${index + 1}`}
                      className="w-full h-full object-contain "
                    />
                  </div>
                ))}
              />
            </div>
          ) : (
            <div className="w-1/2 p-2 mb-1.5 pb-2.5 h-32">
              <img src={img} alt="Default" className="w-full h-full object-cover" />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}