'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import data from '../../../resources/json.json';
import Sector from '@/component/sector/page';
import House from '@/component/houseInfo/houseInfo';

const DormPage = () => {
  const [dormData, setDormData] = useState(null);

  useEffect(() => {
    const storedDormName = localStorage.getItem('dormName');
    if (storedDormName) {
      console.log('Stored dorm name:', storedDormName);
      const dataForName = data[storedDormName];
      if (dataForName) {
        setDormData(dataForName);
      } else {
        console.error('Dorm data not found for:', storedDormName);
      }
    } else {
      console.log('No dorm name found in localStorage.');
    }
  }, []);

  return (
    <div>
      <NavBar activeLink="Dorms" />
      {dormData && dormData.img ? <Jumbotron imageSrc={dormData.img} /> : <p>Dorm information not available.</p>}
      {dormData && <Sector sectionName={dormData.name}></Sector>}
      {dormData && dormData.stacks && dormData.stacks.length > 0 ? (
        <div>
          {dormData.stacks.map((stack, index) => (
            <div key={index} id={`stack-${index}`}>
              <House dormData={stack}></House>
            </div>
          ))}
        </div>
      ) : (
        <House dormData={dormData}></House>
      )}
    </div>
  );
};

export default DormPage;
