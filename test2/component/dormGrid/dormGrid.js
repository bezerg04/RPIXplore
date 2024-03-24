import React from "react";
import DormCard from "../dormCard/dormCard";
import buildingsData from '../../../resources/json.json'

const DormGrid = () => {
  const dormCards = Object.entries(buildingsData).map(([buildingName, buildingDetails]) => {
    // Check if there are multiple buildings in the stacks
    console.log("Num building",buildingDetails.stacks.length)
    const hasMultipleBuildings = buildingDetails.stacks.length > 1;

    const exampleDormData = {
      dormName: buildingName,
      dormType: hasMultipleBuildings
        ? "Multiple buildings"
        : buildingDetails.stacks[0].roomInfo.types.map(type => Object.keys(type).join(", ")).join(", "),
      dormImg: buildingDetails.img,
      //dormSize: !hasMultipleBuildings && buildingDetails.stacks[0].roomInfo.types[0].Triple.sqft,
      dormLink: `/${buildingName.toLowerCase()}`,
    };

    return <DormCard key={buildingName} dormData={exampleDormData} />;
  });

  return (
    <div className="p-4 flex gap-4 justify-normal">
      {dormCards}
    </div>
  );
};

export default DormGrid;
