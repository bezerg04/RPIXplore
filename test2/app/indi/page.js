import React from 'react';
import NavBar from '@/component/navbar/page';
import Jumbotron from '@/component/jumbotron/page';
import Sector from '@/component/sector/page';

export default function IndiPage({ child = 'Quad' }) {
  const jumbotronImage = require(`@/component/jumbotron/${child}jumbo.png`).default;

  return (
    <div>
      <NavBar activeLink="Dorms" />
      <Jumbotron imageSrc={jumbotronImage.src} />

       <Sector data={child}/> 
    </div>
  );
}
