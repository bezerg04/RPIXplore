import React from 'react';
import NavBar from '@/component/navbar/page';
import DormCard from '@/component/dormCard/dormCard';

const exampleDormData = {
  dormName: 'Barton Hall',
  dormType: 'Triple, Triple Suite',
  dormLink: 'https://i.redd.it/campus-appreciation-post-to-try-and-spread-some-positivity-v0-997ot0it1oda1.jpg?width=4032&format=pjpg&auto=webp&s=aed418bee01797297237977d30b896aa20a123f8',
  dormSize: 120
};

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <DormCard dormData={exampleDormData}></DormCard>

      
    </div>
   
  );
}
