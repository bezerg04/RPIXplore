'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '@/src/component/navbar/page';
import Jumbotron2 from '@/src/component/JumbotronWithText/page';
import data from '../../../resources/json.json';
import Sector from '@/src/component/sector/page';
import House from '@/src/component/houseInfo/houseInfo';
import QuadHouses from '@/src/component/quadinfo/quadHouseInfo';

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
      {dormData && dormData.img ? (
        <Jumbotron2
          titleText="Welcome to RPXplore!"
          subtitleText="Explore the campus and learn more about what it has to offer."
          lowerText={dormData.jumboText} // Pull lowerText dynamically
          backgroundImage={dormData.img} // Use dorm image dynamically
          showBottom={true}
          showTop={false}
        />
      ) : (
        <p>Dorm information not available.</p>
      )}
      {dormData && <Sector sectionName={dormData.name}></Sector>}
      {dormData && dormData.stacks && dormData.stacks.length > 0 ? (
        <div>
          {dormData.stacks.map((stack, index) => (
            <div key={index} id={`stack-${index}`}>
              <QuadHouses dormData={stack}></QuadHouses>
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
