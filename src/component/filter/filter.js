'use client';
import React from 'react';
import { Dropdown, Button, Badge } from 'flowbite-react';

const DormFilters = ({ filters, setFilters }) => {
  const handleLabelClick = (type, value) => {
    setFilters((prev) => {
      const isAlreadySelected = prev[type]?.includes(value);
      return {
        ...prev,
        [type]: isAlreadySelected
          ? prev[type].filter((item) => item !== value)
          : [...(prev[type] || []), value],
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      roomType: [],
      year: [],
      accessible: [],
      ac: [],
      location: [],
    });
  };

  const removeFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  };

  const createClickableRow = (id, label, type, value) => {
    const isSelected = filters[type]?.includes(value);
    const labelClasses = `cursor-pointer transition-colors duration-150 px-3 py-2 w-full rounded-md text-left ${
      isSelected ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 hover:text-gray-800'
    }`;

    return (
      <Dropdown.Item key={id} className="cursor-pointer">
        <span className={labelClasses} onClick={() => handleLabelClick(type, value)}>
          {label}
        </span>
      </Dropdown.Item>
    );
  };

  const renderSelectedFilters = () => {
    const selected = [];

    if (filters.roomType?.length > 0) {
      filters.roomType.forEach((type) =>
        selected.push({ label: `Room Type: ${type}`, type: 'roomType', value: type })
      );
    }
    if (filters.year?.length > 0) {
      filters.year.forEach((year) =>
        selected.push({ label: `Year: ${year}`, type: 'year', value: year })
      );
    }
    if (filters.accessible?.length > 0) {
      filters.accessible.forEach((accessible) =>
        selected.push({
          label: `Accessibility: ${accessible ? 'Accessible' : 'Non-Accessible'}`,
          type: 'accessible',
          value: accessible,
        })
      );
    }
    if (filters.ac?.length > 0) {
      filters.ac.forEach((ac) =>
        selected.push({
          label: `AC: ${ac ? 'Has AC' : 'No AC'}`,
          type: 'ac',
          value: ac,
        })
      );
    }
    if (filters.location?.length > 0) {
      filters.location.forEach((location) =>
        selected.push({ label: `Location: ${location}`, type: 'location', value: location })
      );
    }

    return selected.map((filter, index) => (
      <Badge
        key={index}
        color="indigo"
        onClick={() => removeFilter(filter.type, filter.value)}
        className="cursor-pointer mr-2 mb-2 px-3 py-1 text-sm"
      >
        {filter.label} &times;
      </Badge>
    ));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-start space-x-4 p-4 ">
        <Dropdown className='p-5' label="Room Type">
          {createClickableRow('single', 'Single', 'roomType', 'Single')}
          {createClickableRow('double', 'Double', 'roomType', 'Double')}
          {createClickableRow('triple', 'Triple', 'roomType', 'Triple')}
        </Dropdown>

        <Dropdown label="Year">
          {createClickableRow('freshman', 'Freshman', 'year', 'Freshman')}
          {createClickableRow('sophomore', 'Sophomore', 'year', 'Sophomore')}
        </Dropdown>

        <Dropdown label="Accessibility">
          {createClickableRow('accessible', 'Accessible', 'accessible', true)}
          {createClickableRow('nonAccessible', 'Non-Accessible', 'accessible', false)}
        </Dropdown>

        <Dropdown label="Air Conditioning">
          {createClickableRow('ac', 'Has AC', 'ac', true)}
          {createClickableRow('noAc', 'No AC', 'ac', false)}
        </Dropdown>

        <Dropdown label="Location" className="focus:outline-none">
          {createClickableRow('inCampus', 'In-Campus', 'location', 'In-Campus')}
          {createClickableRow('freshmanHill', 'Freshman Hill', 'location', 'Freshman Hill')}
        </Dropdown>

        <Button onClick={resetFilters} color="gray">
          Reset
        </Button>
      </div>

      <div className="ml-5 mt-1 text-gray-700 flex flex-wrap">
        {renderSelectedFilters().length ? renderSelectedFilters() : 'No filters applied'}
      </div>
    </div>
  );
};

export default DormFilters;
