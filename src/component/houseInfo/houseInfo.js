import React, { useEffect } from 'react';
import { Tabs } from 'flowbite-react';
import { HiOutlineUser, HiOutlineUsers, HiOutlineUserGroup } from 'react-icons/hi2';
import { LiaUsersSolid } from 'react-icons/lia';
import CustomCarousel from '../Carousel/customcarousel.js';


const House = ({ dormData }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

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
            {/* Left side: Image carousel */}
            <div className="w-1/2 border p-4 rounded-lg bg-gray-50">
              <h5 className="text-lg font-bold mb-2">{dormData.title} {roomType} Images</h5>
              <div className="relative w-full h-[400px]">
                {roomData.img && roomData.img.length > 0 ? (
                  <CustomCarousel items={roomData.img.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))} />
                ) : (
                  <p>No images available.</p>
                )}
              </div>
            </div>

            {/* Right side: 3D Scans */}
            <div className="w-1/2 border p-4 rounded-lg bg-gray-50">
              <h5 className="text-lg font-bold mb-2">{dormData.title} {roomType} Scans</h5>
              <div className="relative w-full h-[400px]">
                {roomData.scan && roomData.scan.length > 0 ? (
                  <CustomCarousel items={roomData.scan.map((scan, index) => (
                    <model-viewer
                      key={index}
                      src={scan}
                      ar
                      camera-controls
                      touch-action="pan-y"
                      disable-tap
                      auto-rotate
                      camera-orbit="0deg 80deg 15m" // Adjust to control zoom and position
                      field-of-view="80deg" // Decrease the value to zoom in
                      style={{ width: '100%', height: '100%' }}
                    ></model-viewer>
                  ))} />
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
      <div style={{ width: '95%' }} className="border-solid border-2 rounded-lg mb-8">
        <div className="relative">
          <Tabs variant="underline">{roomTabs}</Tabs>
          <h2 className="absolute right-4 top-2.5 text-lg font-semibold">{dormData.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default House;