import React from 'react';
import { Button } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import NavBar from '@/src/component/navbar/page';
import Jumbotron from '@/src/component/jumbotron/page';
import Jumbotron2 from '@/src/component/JumbotronWithText/page.js';
import Welcome from '@/src/component/welcome/page';
import Tritiles from '@/src/component/tritiles/page';
import MapComponent from '@/src/component/map/page';
import jumbopic from '@/src/component/jumbotron/jumbopic.png'
import jumbo from '@/src/component/JumbotronWithText/jumbo.png'
import { NewFooter } from '@/src/component/footer/footer';

export default function Home() {
  return (
    <div>
      <NavBar activeLink="Home" />
      <Jumbotron2 titleText="Welcome to RPXplore!"
        subtitleText="Explore the campus and learn more about what it has to offer."
        lowerText={`Explore,\nwith RPIXplore`}
        backgroundImage={jumbo.src}
        showBottom={true}
        showTop={false}
        />
      <Welcome></Welcome>
      <Tritiles></Tritiles>
      <MapComponent></MapComponent>
      <NewFooter/>
    </div>
  );
}
