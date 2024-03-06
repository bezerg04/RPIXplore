'use client'
//npm install @react-google-maps/api tailwindcss
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px', // Adjust the height as needed
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
        //add more dorms
      ],
    },
    {
      zone: 'In Campus',
      dorms: [
        { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
        { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
        // Add more dorms
      ],
    },
    {
        zone: 'Past Burdett Ave',
        dorms: [
          { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
          { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
          // Add more dorms
        ],
    },
    {
        zone: 'Down the Hill',
        dorms: [
          { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
          { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
          // Add more dorms
        ],
      },
  ];

function MapComponent() {
  const [mapCenter, setMapCenter] = useState({ lat: 42.7298, lng: -73.6789 }); //default RPI

  return (
    <div>
      <h1 className="text-2xl font-bold text-left mt-6 mb-2 ml-6">Interactive Map</h1>
      <LoadScript googleMapsApiKey="AIzaSyDtT88p17SCFuYEZHvDDiohpIhZl7pmYQ4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={16} //adjust to change map zoom, higher = closer
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </LoadScript>
      <div>
        {locations.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="mt-4">
            <h2 className="text-xl font-semibold">{zone.zone}</h2>
            <div className="flex flex-col items-start">
              {zone.dorms.map((dorm, dormIndex) => (
                <button
                  key={dormIndex}
                  className="my-2 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-700 transition duration-150"
                  onClick={() => setMapCenter({ lat: dorm.lat, lng: dorm.lng })}
                >
                  {dorm.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapComponent;
