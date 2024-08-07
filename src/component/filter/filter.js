'use client'
import React from "react";
import { Checkbox, Dropdown, Button } from 'flowbite-react';

const DormFilters = ({ filters, setFilters }) => {
  const handleCheckboxChange = (type, value) => {
    setFilters(prev => {
      const isAlreadySelected = prev[type]?.includes(value);  // Safeguard here
      return {
        ...prev,
        [type]: isAlreadySelected 
          ? prev[type].filter(item => item !== value) 
          : [...(prev[type] || []), value],  // Safeguard here
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      roomType: [],
      year: [],
      accessible: [],
      ac: [],
      location: []  // Reset location filter as well
    });
  };

  const createClickableRow = (id, label, type, value) => (
    <Dropdown.Item onClick={() => handleCheckboxChange(type, value)}>
      <div className="flex items-center cursor-pointer">
        <Checkbox 
          id={id} 
          onChange={() => handleCheckboxChange(type, value)}
          checked={filters[type]?.includes(value)}  // Safeguard here
          className="mr-2"
        />
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      </div>
    </Dropdown.Item>
  );

  const selectedFiltersText = () => {
    const selected = [];

    if (filters.roomType?.length > 0) {
      selected.push(`Room Types: ${filters.roomType.join(', ')}`);
    }
    if (filters.year?.length > 0) {
      selected.push(`Years: ${filters.year.join(', ')}`);
    }
    if (filters.accessible?.length > 0) {
      selected.push(`Accessibility: ${filters.accessible.includes(true) ? 'Accessible' : 'Non-Accessible'}`);
    }
    if (filters.ac?.length > 0) {
      selected.push(`AC: ${filters.ac.includes(true) ? 'Has AC' : 'No AC'}`);
    }
    if (filters.location?.length > 0) {
      selected.push(`Location: ${filters.location.join(', ')}`);
    }

    return selected.join(' | ');
  };

  return (
    <div>
      <div className="flex items-center justify-start space-x-4 p-4">
        <Dropdown label="Room Type">
          {createClickableRow("single", "Single", "roomType", "Single")}
          {createClickableRow("double", "Double", "roomType", "Double")}
          {createClickableRow("triple", "Triple", "roomType", "Triple")}
        </Dropdown>

        <Dropdown label="Year">
          {createClickableRow("freshman", "Freshman", "year", "Freshman")}
          {createClickableRow("sophomore", "Sophomore", "year", "Sophomore")}
        </Dropdown>

        <Dropdown label="Accessibility">
          {createClickableRow("accessible", "Accessible", "accessible", true)}
          {createClickableRow("nonAccessible", "Non-Accessible", "accessible", false)}
        </Dropdown>

        <Dropdown label="Air Conditioning">
          {createClickableRow("ac", "Has AC", "ac", true)}
          {createClickableRow("noAc", "No AC", "ac", false)}
        </Dropdown>

        <Dropdown label="Location">
          {createClickableRow("inCampus", "In-Campus", "location", "In-Campus")}
          {createClickableRow("freshmanHill", "Freshman Hill", "location", "Freshman Hill")}
          {/* Add more locations as needed */}
        </Dropdown>

        <Button onClick={resetFilters} color="gray">Reset</Button>
      </div>

      <div className="ml-5 mt-0 text-gray-700">
        {selectedFiltersText() || "No filters applied"}
      </div>
    </div>
  );
};

export default DormFilters;
