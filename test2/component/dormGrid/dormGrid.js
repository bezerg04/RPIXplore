import React from "react";
import DormCard from "../dormCard/dormCard";
import buildingsData from '../../../resources/json.json'

const DormGrid = () => {
  const dormCards = Object.entries(buildingsData).map(([buildingName, buildingDetails]) => {
    // Check if there are multiple buildings in the stacks
    const hasMultipleBuildings = buildingDetails.stacks.length > 1;

    const exampleDormData = {
      dormName: buildingName,
      dormType: hasMultipleBuildings
        ? "Multiple buildings"
        : Object.keys(buildingDetails.stacks[0].roomInfo.types).join(", "),
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
