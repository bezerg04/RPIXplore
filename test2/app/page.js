
import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import Welcome from '@/component/welcome/page';
import Tritiles from '@/component/tritiles/page';
import MapComponent from '@/component/map/page';

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <Welcome></Welcome>
      <Tritiles></Tritiles>
      <MapComponent></MapComponent>
    </div>
   
  );
}
