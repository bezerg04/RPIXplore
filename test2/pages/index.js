
import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import Welcome from '@/component/welcome/page';
import Tritiles from '@/component/tritiles/page';
import MapComponent from '@/component/map/page';
import jumbopic from '@/component/jumbotron/jumbopic.png'
import { NewFooter } from '@/component/footer/footer';

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
