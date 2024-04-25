'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
import StatusIcon from './statusIcon';


import data from '../../../resources/json.json';

export default function Sector({ sectionName = 'Quad' }) {
  const sectionData = data[sectionName];
  
  if (!sectionData) {
    return <div>Section data not found.</div>;
  }

  // Destructuring for easier access
  const { pricing, stacks, description, address, location, accessible, ac, dining, laundryInfo, img, resources  } = sectionData;
  
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
      
      <div className='flex flex-row'>
        <div className="flex flex-col w-1/2 pl-2 mt-0">
        <h1  className='font-bold font-black text-xl'>{sectionName}</h1>
          
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

        {resources && resources.length > 0 ? (
          <div className="w-1/2 p-2 mb-1.5 pb-2.5 h-32">
            <Carousel>
              {resources.map((resource, index) => (
                <img key={index} src={resource} alt={`Resource ${index + 1}`} className='w-auto h-full object-fit'/>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="w-1/2 p-2 mb-1.5 pb-2.5 h-32">
            <img src={img} alt="Default" />
          </div>
        )}
      </div>
    </div>
  );
}
