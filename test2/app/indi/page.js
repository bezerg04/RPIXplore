'use client';
import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import Welcome from '@/component/welcome/page';
import Tritiles from '@/component/tritiles/page';
import MapComponent from '@/component/map/page';
import Sector from '@/component/sector/page';
import { useEffect, useState } from 'react';

const DormPage = () =>{
  const [dormName, setDormName] = useState('');
  useEffect(() => {
    const storedDormName = localStorage.getItem('dormName');
    if (storedDormName) {
      console.log(storedDormName)
      setDormName(storedDormName);
    }
  }, []);
  console.log('dorm name',dormName);
  //const jumbotronImage = require(`@/component/jumbotron/${dormName}jumbo.png`).default;

  return (
    <div>
      <NavBar activeLink="Dorms" />
      {/* <Jumbotron imageSrc={jumbotronImage.src} /> */}

       <Sector data={dormName}/> 
    </div>
  );
}
export default DormPage;
