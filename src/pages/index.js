import React from 'react';
import { Button } from 'flowbite-react';
import NavBar from '@/src/component/navbar/page';
import Jumbotron2 from '@/src/component/JumbotronWithText/page.js';
import Welcome from '@/src/component/welcome/page';
import Tritiles from '@/src/component/tritiles/page';
import MapComponent from '@/src/component/map/page';
import jumbo from '@/src/component/JumbotronWithText/jumbo.png';

export default function Home() {
  return (
    <div>
      {/* Navbar with sign-in moved here */}
      <NavBar activeLink="Home" />
      
      {/* Jumbotron Section */}
      <Jumbotron2
        titleText="Welcome to RPXplore!"
        subtitleText="Explore the campus and learn more about what it has to offer."
        lowerText={`Explore,\nwith RPIXplore`}
        backgroundImage={jumbo.src}
        showBottom={true}
        showTop={false}
      />

      {/* Main Content */}
      <Welcome />
      <Tritiles />
      <MapComponent />
      {/* <NewFooter /> */}
    </div>
  );
}
