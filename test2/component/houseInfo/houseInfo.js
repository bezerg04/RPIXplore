import NavBar from "../navbar/page";
import { Tabs } from "flowbite-react";
const House = ({ dormData }) => {
  console.log(dormData)
  console.log(dormData.roomInfo)
  const roomTabs = Object.entries(dormData.roomInfo.types).map(([roomType,roomData])=>{
    return <Tabs.Item key={roomType} title= {roomType}>
      
    </Tabs.Item>
            
  })
  
  return (
    <div> 
      <div className="w-full border-solid	border-2">
        <Tabs>
          {roomTabs}
        </Tabs>

      </div>
      
    </div>
  );
};

export default House;
