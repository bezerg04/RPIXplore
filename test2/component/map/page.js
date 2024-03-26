'use client'
//AIzaSyDtT88p17SCFuYEZHvDDiohpIhZl7pmYQ4
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
      ],
    },
    {
      zone: 'In Campus',
      dorms: [
        { name: 'E-Complex', lat: 42.73132065977962, lng: -73.67922250649707 },
        { name: 'North Hall', lat: 42.73132344989214, lng: -73.67981431606012 },
        { name: 'Quadrangle Complex (Quad)', lat: 42.73063087581129, lng: -73.67743373544864 } , 
      ],
    },
    {
        zone: 'Past Burdett Ave',
        dorms: [
          { name: 'Bryckwyck Apartments', lat: 42.73473081077628, lng: -73.66373665957707 }, 
          { name: 'Stacwyck Apartments', lat: 42.73359030110175, lng: -73.66491375820921 },
          { name: 'Burdett Avenue Residence Hall', lat: 42.7312020555503, lng: -73.67114585835905 },
          { name: 'Colonie Apartments', lat: 42.736968815384, lng: -73.67011545492971 }, , 
          { name: 'RAHP A (Colvin and Albright)', lat: 42.731059204758616, lng: -73.66939927922246 },
          { name: 'RAHP B (Beman and Brinsmade)', lat: 42.73489208402806, lng: -73.66538482113461 },
          { name: 'Rousseau Apartments', lat: 42.7344063634127, lng: -73.66425207747068 }, 
          { name: 'Williams Apartments', lat: 42.73395681034878, lng: -73.66452460005917 }
        ],
    },
    {
        zone: 'Down the Hill',
        dorms: [
          { name: 'Blitman Residence Hall', lat: 42.73120026761296, lng: -73.68599472026295 }, 
          { name: 'City Station', lat: 42.72775594008568, lng: -73.68736374320818 }, 
          { name: 'Polytechnic Residential Commons', lat: 42.72210326965186, lng: -73.67950083409157 } 
        ],
      },
];

function MapComponent() {
  const [mapCenter, setMapCenter] = useState({ lat: 42.7298, lng: -73.6789 }); //default RPI

  // Function to generate buttons for dorms of a given zone
  const generateDormButtons = (zoneIndex) => (
    locations[zoneIndex].dorms.map((dorm, dormIndex) => (
      <button
        key={dormIndex}
        className="my-2 px-4 py-1 bg-blue-500 text-black rounded hover:bg-blue-700 transition duration-150"
        onClick={() => setMapCenter({ lat: dorm.lat, lng: dorm.lng })}
      >
        {dorm.name}
      </button>
    ))
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-left mt-6 mb-2 ml-6">Interactive Map</h1>
      <LoadScript googleMapsApiKey="AIzaSyDtT88p17SCFuYEZHvDDiohpIhZl7pmYQ4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={16}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </LoadScript>
      <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4 gap-6 p-4">
        <div className="mt-2">
          <h2 className="text-xl font-semibold text-center">Freshman Hill</h2>
          <div className="flex flex-col items-center mt-0">
            {generateDormButtons(0)}
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-semibold text-center">In Campus</h2>
          <div className="flex flex-col items-center mt-0">
            {generateDormButtons(1)}
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-semibold text-center">Past Burdett Ave</h2>
          <div className="flex flex-col items-center mt-0">
            {generateDormButtons(2)}
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-semibold text-center">Down the Hill</h2>
          <div className="flex flex-col items-center mt-0">
            {generateDormButtons(3)}
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default MapComponent;