import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        HOMECONT
      <Navbar/>
      </div>
    </div>
  )
}
