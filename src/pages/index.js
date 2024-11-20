import React from 'react';
import { Button } from 'flowbite-react';
import NavBar from '@/src/component/navbar/page';
import Jumbotron2 from '@/src/component/JumbotronWithText/page.js';
import Welcome from '@/src/component/welcome/page';
import Tritiles from '@/src/component/tritiles/page';
import MapComponent from '@/src/component/map/page';
import jumbo from '@/src/component/JumbotronWithText/jumbo.png';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <div>
      <NavBar activeLink="Home" />
      <Jumbotron2
        titleText="Welcome to RPXplore!"
        subtitleText="Explore the campus and learn more about what it has to offer."
        lowerText={`Explore,\nwith RPIXplore`}
        backgroundImage={jumbo.src}
        showBottom={true}
        showTop={false}
      />

      {!user ? (
        <div className="flex justify-center my-10">
          <Button onClick={signInWithGoogle} gradientDuoTone="greenToBlue">
            Sign in with Google
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center my-10">
          <p className="mb-4">Welcome, {user.displayName}!</p>
          <Button onClick={logout} gradientDuoTone="purpleToPink">
            Logout
          </Button>
        </div>
      )}

      <Welcome />
      <Tritiles />
      <MapComponent />
      {/* <NewFooter /> */}
    </div>
  );
}
