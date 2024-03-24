import React from 'react';
import NavBar from '@/component/navbar/page';
import DormGrid from '@/component/dormGrid/dormGrid';


export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <DormGrid></DormGrid>      
    </div>
   
  );
}
