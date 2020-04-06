import React from 'react';
import {useAuth} from '../context/auth';

import Projects from './projects'
function Home () {
  let { currentUser } = useAuth();

  return (
    <div className="container p-2 mx-auto flex flex-col">
      <h1>Welcome back {currentUser.name}</h1>
      {/* <Projects /> */}
    </div>
  );
}

export default Home;
