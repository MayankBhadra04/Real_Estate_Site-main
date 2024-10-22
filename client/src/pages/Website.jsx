import React from 'react'
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Move from '../components/moving/mov.jsx'
import MapFront from '../components/map.jsx';
import Contact from '../components/contact/contact.jsx';
import Video from '../components/video/video.jsx';

const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <Move/>
    <Residencies/>
    <Video/>
    <MapFront/>
    <Contact/>
    <GetStarted/>
  </div>
  )
}

export default Website