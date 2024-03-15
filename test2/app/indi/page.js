import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import Welcome from '@/component/welcome/page';
import Tritiles from '@/component/tritiles/page';
import MapComponent from '@/component/map/page';
import Sector from '@/component/sector/page';

export default function Home({ child = 'Quad' }) {
  const jumbotronImage = require(`@/component/jumbotron/${child}jumbo.png`).default;

  return (
    <div>
      <NavBar activeLink="Dorms" />
      <Jumbotron imageSrc={jumbotronImage.src} />

       <Sector data={child}/> 
    </div>
  );
}
