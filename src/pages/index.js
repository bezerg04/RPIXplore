import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/src/component/navbar/page';
import Jumbotron from '@/src/component/jumbotron/page';
import Welcome from '@/src/component/welcome/page';
import Tritiles from '@/src/component/tritiles/page';
import MapComponent from '@/src/component/map/page';
import jumbopic from '@/src/component/jumbotron/jumbopic.png'
import { NewFooter } from '@/src/component/footer/footer';

export default function Home() {
  return (
    <div>
      <NavBar activeLink="Home" />
      <Jumbotron imageSrc={jumbopic.src} />
      <Welcome></Welcome>
      <Tritiles></Tritiles>
      <MapComponent></MapComponent>
      <NewFooter/>
    </div>
  );
}
