'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { Carousel } from 'flowbite-react';


import data from '../../../resources/json.json';

export default function Sector({ sectionName = 'Quad' }) {
  const sectionData = data[sectionName];
  
  if (!sectionData) {
    return <div>Section data not found.</div>;
  }

  // Destructuring for easier access
  const { pricing, stacks, description, address, location, accessible, ac, dining, laundryInfo } = sectionData;
  
  return (
    <div>

      {/* Container for buttons with full width, centered content, and padding */}
      <div className=' w-10/12 flex justify-center items-center p-4'>
        {stacks && stacks.length > 1 && (
          <div className='flex gap-1 flex-wrap justify-center'>
            {stacks.map((stack, index) => (
                <Button key={index} color="gray">{stack.title}</Button>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex flex-column">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
        <div>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Accessible:</strong> {accessible ? 'Yes' : 'No'}</p>
            <p><strong>AC Available:</strong> {ac ? 'Yes' : 'No'}</p>
            <p><strong>Nearest Dining Hall:</strong> {dining}</p>
            <p><strong>Laundry Info:</strong> Located at {laundryInfo.location} with {laundryInfo.nWashers} washers and {laundryInfo.nDryers} dryers.</p>
            <p><strong>Pricing:</strong></p>
              <ul>
                <li> &emsp; Single: {pricing.single}</li>
                <li> &emsp; Double: {pricing.double}</li>
                <li> &emsp; Triple: {pricing.triple}</li>
              </ul>
            
        
        </div>

      </div>

        
      
    </div>
  );
}
