// External Dependencies
import React from 'react';

// Internal Dependencies
import BackgroundImage from '../../components/BackgroundImage';
const mobileBackgroundImage = require('../../assets/pictures/bricks_to_heaven.png')
const desktopBackgroundImage = require('../../assets/pictures/road.png')

// Component Definition 
const LandingPage = () => {
  return (
    <>
     <BackgroundImage desktopBackgroundImage={desktopBackgroundImage} mobileBackgroundImage={mobileBackgroundImage}/>
    </>
  )
}

export default LandingPage;