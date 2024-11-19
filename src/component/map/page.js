'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useRef} from 'react';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const locations = [
  {
    zone: 'Freshman Hill',
    dorms: [
      { name: 'Barton Hall', lat: 42.729106980120996, lng: -73.67408661163303 },
      { name: 'Bray Hall', lat: 42.72874357409226, lng: -73.67397491860618 },
      { name: 'Hall Hall', lat: 42.72862365194546, lng: -73.67535750701602 },
      { name: 'Nason Hall', lat: 42.72773070884515, lng: -73.67348891968427 },
      { name: 'Nugent Hall', lat: 42.72754946396228, lng: -73.6750467622503 },
      { name: 'Sharp Hall', lat: 42.72699533480291, lng: -73.67471038624485 },
      { name: 'Warren Hall', lat: 42.728103106109685, lng: -73.67551709586671 },
    ],
  },
  {
    zone: 'In Campus',
    dorms: [
      { name: 'E-Complex', lat: 42.73132065977962, lng: -73.67922250649707 },
      { name: 'North Hall', lat: 42.73132344989214, lng: -73.67981431606012 },
      { name: 'Quadrangle Complex (Quad)', lat: 42.73063087581129, lng: -73.67743373544864 },
    ],
  },
  {
    zone: 'Past Burdett Ave',
    dorms: [
      { name: 'Bryckwyck Apartments', lat: 42.73473081077628, lng: -73.66373665957707 },
      { name: 'Stacwyck Apartments', lat: 42.73359030110175, lng: -73.66491375820921 },
      { name: 'Burdett Avenue Residence Hall', lat: 42.7312020555503, lng: -73.67114585835905 },
      { name: 'Colonie Apartments', lat: 42.736968815384, lng: -73.67011545492971 },
      { name: 'RAHP A (Colvin and Albright)', lat: 42.731059204758616, lng: -73.66939927922246 },
      { name: 'RAHP B (Beman and Brinsmade)', lat: 42.73489208402806, lng: -73.66538482113461 },
      { name: 'Rousseau Apartments', lat: 42.7344063634127, lng: -73.66425207747068 },
      { name: 'Williams Apartments', lat: 42.73395681034878, lng: -73.66452460005917 },
    ],
  },
  {
    zone: 'Down the Hill',
    dorms: [
      { name: 'Blitman Residence Hall', lat: 42.73120026761296, lng: -73.68599472026295 },
      { name: 'City Station West', lat: 42.72775594008568, lng: -73.68736374320818 },
      { name: 'Polytechnic Residential Commons', lat: 42.72210326965186, lng: -73.67950083409157 },
    ],
  },
];
function MapComponent() {
  const [mapCenter, setMapCenter] = useState({ lat: 42.7298, lng: -73.6789 }); // Default RPI
  const [selectedLocation, setSelectedLocation] = useState(null); // Track selected location
  const mapRef = useRef(null); // Ref to the map container

  const handleDormClick = (lat, lng) => {
    // Update map center and selected location
    setMapCenter({ lat, lng });
    setSelectedLocation({ lat, lng });

    // Scroll the map into view smoothly
    mapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const generateDormButtons = (zoneIndex) =>
    locations[zoneIndex].dorms.map((dorm, dormIndex) => (
      <button
        key={dormIndex}
        className="px-1 py-1 text-black rounded hover:bg-blue-300 transition duration-150"
        onClick={() => handleDormClick(dorm.lat, dorm.lng)}
      >
        {dorm.name}
      </button>
    ));

  return (
    <div>
      <h1 className="text-4xl font-semibold text-left mt-6 mb-4 pl-24">Interactive Map</h1>
      <div ref={mapRef}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={16}>
            {selectedLocation && (
              <Marker
                position={selectedLocation}
                icon={{
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Red marker
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Buttons Section */}
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
        {locations.map((zone, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-xl font-semibold text-left mb-2">{zone.zone}</h2>
            <div className="flex flex-col gap-2 items-start">
              {generateDormButtons(index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapComponent;