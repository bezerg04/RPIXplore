import { useState, useEffect } from "react";
import { Tabs, Carousel } from "flowbite-react";
import { HiOutlineUser, HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi2";
import { LiaUsersSolid } from "react-icons/lia";

const House = ({ dormData }) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentScans, setCurrentScans] = useState([]);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  if (!dormData || !dormData.roomInfo) {
    return <p>Dorm information not available.</p>;
  }

  const iconMap = {
    Single: HiOutlineUser,
    Double: HiOutlineUsers,
    Triple: HiOutlineUserGroup,
    TripleSuite: LiaUsersSolid
  };

  const handleImageClick = (images, index) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleScanClick = (scans, index) => {
    setCurrentScans(scans);
    setCurrentImageIndex(index);
    setIsScanModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
    setCurrentImages([]);
  };

  const closeScanModal = () => {
    setIsScanModalOpen(false);
    setCurrentImageIndex(0);
    setCurrentScans([]);
  };
  const disableDrag = (e) => {
    e.preventDefault();
  };

  const roomTabs = Object.entries(dormData.roomInfo.types).map(
    ([roomType, roomData]) => {
      const Icon = iconMap[roomType];
      return (
        <Tabs.Item key={roomType} title={roomType} icon={Icon} className="mx-4">
          <div className="flex space-x-4 mx-4 bg-gray-50">
            <div className="w-1/2 border p-4 rounded-lg h-full">
              <h5 className="text-lg font-bold">{dormData.title} {roomType} Images</h5>
              <div className="w-full mt-2">
                {roomData.img && roomData.img.length > 0 ? (
                  <div className="h-full">
                    <Carousel slide={false} className="h-full">
                      {roomData.img.map((image, index) => (
                        <div 
                          key={index}
                          className="relative h-0"
                          style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
                          onClick={() => handleImageClick(roomData.img, index)}
                        >
                          <img
                            src={image}
                            alt={`Resource ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
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

            <div className="w-1/2 border p-4 rounded-lg bg-gray-400">
              <h5 className="text-lg font-bold">{dormData.title} {roomType} Scans</h5>
              <div className="w-full mt-2">
                {roomData.scan.length > 0 ? (
                  <Carousel
                  onMouseDown={disableDrag} 
                  onTouchStart={disableDrag} 
                  onTouchMove={disableDrag} 
                  onMouseMove= {disableDrag} 

                  slide={false} leftControl="<left" rightControl="right>" className="h-full">
                    {roomData.scan.map((scan, index) => (
                      <div 
                        key={index}
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handleScanClick(roomData.scan, index)}
                      >
                        <model-viewer
                          src={scan} // Assuming scan is the path to the model
                          className="model-viewer w-full h-full"
                          ar
                          camera-controls
                          style={{ width: '100%', height: '430px' }} // Adjust the height as necessary
                        ></model-viewer>
                      </div>
                    ))}
                  </Carousel>
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="relative bg-white p-4 rounded-lg max-w-3xl mx-auto">
            <div className="w-full h-[80vh]">
              <Carousel autoplay={false} activeItem={currentImageIndex} className="h-full">
                {currentImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative w-full h-full"
                  >
                    <img
                      src={image}
                      alt={`Resource ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default House;
