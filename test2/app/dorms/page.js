'use client'
import React, { useState } from 'react';
import NavBar from '@/component/navbar/page';
import DormGrid from '@/component/dormGrid/dormGrid';
import { Footer, Spinner } from "flowbite-react";

export default function Home() {
  // State to track if the content is loading
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <NavBar activeLink="Dorms" />
      {/* Show spinner only if isLoading is true */}
      {isLoading && (
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
          </div>
        </div>
      )}
      {/* Pass setIsLoading to DormGrid to update isLoading state */}
      <DormGrid setIsLoading={setIsLoading} />
    </div>
  );
}
