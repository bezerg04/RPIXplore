'use client'
import React, { useEffect } from "react";
import DormCard from "../dormCard/dormCard";
import buildingsData from '../../resources/json.json';

// Add setIsLoading to the component's props
const DormGrid = ({ setIsLoading }) => {
  useEffect(() => {
    // Signal that loading is complete once the component has mounted
    setIsLoading(false);
  }, [setIsLoading]); // Dependency array ensures this runs only once on mount

  const dormCards = Object.entries(buildingsData).map(([buildingName, buildingDetails]) => {
    // Check if there are multiple buildings in the stacks
    console.log("Num building", buildingDetails.stacks.length);
    const hasMultipleBuildings = buildingDetails.stacks.length > 1;

    const exampleDormData = {
      dormName: buildingName,
      dormType: hasMultipleBuildings
        ? "Multiple buildings"
        : Object.keys(buildingDetails.stacks[0].roomInfo.types).join(", "),
      dormImg: buildingDetails.img,
      dormLink: `/${buildingName.toLowerCase()}`,
    };

    return <DormCard key={buildingName} dormData={exampleDormData} />;
  });

  return (
    <div className="">

      <div className="p-4 grid grid-cols-4 gap-4">
        {dormCards}
      </div>
    </div>
    
  );
};

export default DormGrid;
