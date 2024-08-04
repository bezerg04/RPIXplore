import { Tabs, Carousel } from "flowbite-react";
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
              <h5 className="text-lg font-bold">{dormData.title} {roomType} Images</h5>
              <div className="w-full mt-2">
                {roomData.img && roomData.img.length > 0 ? (
                  <div className="h-full">
                    <Carousel className="h-full">
                      {roomData.img.map((image, index) => (
                        <div 
                          key={index}
                          className="relative h-0"
                          style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
                        >
                          <img
                            src={image}
                            alt={`Resource ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                ) : (
                  <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
                    <img
                      src={roomData.img}
                      alt="Default"
                      className="absolute top-0 left-0 w-full h-full object-cover"
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
                      src="../scans/poly.glb"
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
      <div style={{ width: '90%' }} className="border-solid border-2 rounded-lg mb-36">
        <div className="relative">
          <Tabs variant="underline">{roomTabs}</Tabs>
          <h2 className="absolute right-4 top-2.5 text-lg font-semibold">{dormData.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default House;
