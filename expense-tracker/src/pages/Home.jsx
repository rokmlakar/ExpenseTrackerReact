import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import './home.scss';
import Widget from '../components/widgets/Main';

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
      <Navbar/>
      <div className="widgets">
        <Widget/>
      </div>
      </div>
    </div>
  )
}
