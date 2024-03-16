'use client';
import { useState } from 'react';
import Link from 'next/link';
import data from '../../../resources/json.json'

export default function Sector({ sectionName ="Barton" }) {
    // Dynamically access the section of the data based on the prop
    const sectionData = data[sectionName];
    
    // Ensure that sectionData is not undefined
    if (!sectionData) {
      return <div>Section data not found.</div>;
    }
  
    return (
      <div>
        {/* Displaying information from the dynamically selected section */}
        <h1>{sectionName} Residence Hall</h1>
        <p><strong>Description:</strong> {sectionData.description}</p>
        <p><strong>Address:</strong> {sectionData.address}</p>
        <p><strong>Location:</strong> {sectionData.location}</p>
        <p><strong>Accessible:</strong> {sectionData.accessible ? 'Yes' : 'No'}</p>
        <p><strong>AC Available:</strong> {sectionData.ac ? 'Yes' : 'No'}</p>
        <p><strong>Dining:</strong> {sectionData.dining}</p>
        <p><strong>Laundry Info:</strong> Located at {sectionData.laundryInfo.location} with {sectionData.laundryInfo.nWashers} washers and {sectionData.laundryInfo.nDryers} dryers.</p>
        {/* Continue to add more information as needed */}
      </div>
    );
  }