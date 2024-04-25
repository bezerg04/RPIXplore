import { Tabs } from "flowbite-react";
const House = ({ tabData }) => {
  
  
  return (
    <div> 
      <div className="w-full border-solid	border-2">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item title= '{}'></Tabs.Item>
        </Tabs>

      </div>
      
    </div>
  );
};

export default House;
