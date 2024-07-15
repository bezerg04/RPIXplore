import { Tabs, Carousel } from "flowbite-react";
import '../../app/globals.css';
import { HiOutlineUser, HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi2";
import { LiaUsersSolid } from "react-icons/lia";

const House = ({ dormData }) => {
  if (!dormData || !dormData.roomInfo) {
    return <p>Dorm information not available.</p>;
  }

  const iconMap = {
    Single: HiOutlineUser,
    Double: HiOutlineUsers,
    Triple: HiOutlineUserGroup,
    TripleSuite: LiaUsersSolid
  };
  
  const roomTabs = Object.entries(dormData.roomInfo.types).map(
    ([roomType, roomData]) => {
      const Icon = iconMap[roomType];
      return (
        <Tabs.Item key={roomType} title={roomType} icon={Icon} className="mx-4">
          <div className="flex space-x-4 mx-4">
            <div className="w-1/2 border p-4 rounded-lg h-full">
              <h5 className="text-lg font-bold"> {dormData.title} {roomType} Images</h5>
              <div className="w-full mt-2 h-24">
                {roomData.img && roomData.img.length > 0 ? (
                  <div className="h-36">
                    <Carousel>
                      {roomData.img.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Resource ${index + 1}`}
                          className="w-full object-contain"
                        />
                      ))}
                    </Carousel>
                  </div>
                ) : (
                  <div className="">
                    <img
                      src={roomData.img}
                      alt="Default"
                      className="w-full h-60 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="w-1/2 border p-4 rounded-lg">
              <h5 className="text-lg font-bold">{dormData.title} {roomType} Scans</h5>
              <div className="flex space-x-4 overflow-x-auto mt-2">
                {roomData.scan.length > 0 ? (
                  roomData.scan.map((scan, index) => (
                    <model-viewer
                      src="../../scans/poly.glb"
                      key={index}
                      className="model-viewer"
                      ar
                      camera-controls
                    ></model-viewer>
                  ))
                ) : (
                  <p>No scans available.</p>
                )}
              </div>
            </div>
          </div>
        </Tabs.Item>
      );
    }
  );

  return (
    <div className="flex justify-center">
      <div style={{ width: '90%' }} className="border-solid border-2 rounded-lg">
        <Tabs variant="underline">{roomTabs}</Tabs>
      </div>
    </div>
  );
};

export default House;
