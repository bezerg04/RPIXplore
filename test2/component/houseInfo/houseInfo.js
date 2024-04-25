import NavBar from "../navbar/page";
import { Tabs } from "flowbite-react";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";

const House = ({ dormData }) => {
  console.log(dormData)
  console.log(dormData.roomInfo)
  const roomTabs = Object.entries(dormData.roomInfo.types).map(([roomType,roomData])=>{
    return (
      <Tabs.Item key={roomType} title= {roomType}>
          
          <Card>
          <h5 className="text-lg font-bold">Images</h5>
          <div className="w-1/2">
          {roomData.img && roomData.img.length > 0 ? (
            <div className="h-36">
              <Carousel>
                {roomData.img.map((image, index) => (
                  <img key={index} src={image} alt={`Resource ${index + 1}`} className="w-full h-full object-cover"/>
                ))}
              </Carousel>
            </div>
          ) : (
            <div className=" ">
              <img src={roomData.img} alt="Default" className="w-full h-36 object-cover"/>
            </div>
          )}
          </div>
          </Card>
          
          
          <Card>
            <h5 className="text-lg font-bold">Scans</h5>
            <div className="flex space-x-4 overflow-x-auto">
              {roomData.scan.length > 0 ? roomData.scan.map((scan, index) => (
                <img key={index} src={scan} alt={`${roomType} scan ${index + 1}`} className="h-48 w-auto" />
              )) : <p>No scans available.</p>}
            </div>
          </Card>

      </Tabs.Item>
    );        
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
