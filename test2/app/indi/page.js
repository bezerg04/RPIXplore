'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import data from '../../../resources/json.json';
import Sector from '@/component/sector/page';

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
      <h1>{dormData ? dormData.name : 'Dorm not found'}</h1>
      {dormData && dormData.img ? <Jumbotron imageSrc={dormData.img} /> : <p>Dorm information not available.</p>}
      {dormData && <Sector sectionName={dormData.name}></Sector>}
    </div>
  );
};

export default DormPage;
