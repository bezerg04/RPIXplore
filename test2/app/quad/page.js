
import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import Welcome from '@/component/welcome/page';
import Tritiles from '@/component/tritiles/page';
import MapComponent from '@/component/map/page';
import jumbopic from '@/component/jumbotron/quadjumbo.png'

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Jumbotron imageSrc={jumbopic.src} />
    </div>
   
  );
}
