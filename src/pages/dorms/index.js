'use client';
import React, { useState } from 'react';
import NavBar from '@/src/component/navbar/page';
import DormGrid from '@/src/component/dormGrid/dormGrid';
import { Spinner } from "flowbite-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <NavBar activeLink="Dorms" />

      {/* Content area: Filters + Scrollable Grid */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Show spinner only if isLoading is true */}
        {isLoading && (
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" />
            </div>
          </div>
        )}

        {/* DormGrid with scrollable grid */}
        <div className="flex-grow overflow-y-auto">
          <DormGrid setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
}
