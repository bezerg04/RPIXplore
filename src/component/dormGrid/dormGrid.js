'use client'
import React, { useEffect, useState } from "react";
import DormCard from "../dormCard/dormCard";
import DormFilters from "../filter/filter";
import buildingsData from '../../../resources/json.json';

const DormGrid = ({ setIsLoading }) => {
  const [filters, setFilters] = useState({
    roomType: [],
    year: [],
    accessible: [],
    ac: []
  });

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const filteredDorms = Object.entries(buildingsData).filter(([buildingName, buildingDetails]) => {
    const matchesRoomType = filters.roomType.length > 0 
      ? buildingDetails.stacks.some(stack => filters.roomType.some(type => stack.roomInfo.types[type])) 
      : true;

    const matchesYear = filters.year.length > 0 
      ? filters.year.some(year => buildingDetails.year.includes(year)) 
      : true;

    const matchesAccessible = filters.accessible.length > 0 
      ? filters.accessible.includes(buildingDetails.accessible) 
      : true;

    const matchesAC = filters.ac.length > 0 
      ? filters.ac.includes(buildingDetails.ac) 
      : true;

    return matchesRoomType && matchesYear && matchesAccessible && matchesAC;
  });

  const dormCards = filteredDorms.map(([buildingName, buildingDetails]) => {
    const hasMultipleBuildings = buildingDetails.stacks.length > 1;

    const exampleDormData = {
      dormName: buildingName,
      dormType: hasMultipleBuildings
        ? "Multiple buildings"
        : Object.keys(buildingDetails.stacks[0].roomInfo.types).join(", "),
      dormImg: buildingDetails.img,
      dormLink: `/${buildingName.toLowerCase()}`, // Ensure this link is correct
    };

    return <DormCard key={buildingName} dormData={exampleDormData} />;
  });

  return (
    <div>
      <DormFilters filters={filters} setFilters={setFilters} />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {dormCards.length ? dormCards : <p>No dorms match the selected filters.</p>}
      </div>
    </div>
  );
};

export default DormGrid;
