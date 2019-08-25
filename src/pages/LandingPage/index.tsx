// External Dependencies
import React from 'react';

// Internal Dependencies
import BackgroundImage from '../../components/BackgroundImage';
const backgroundImage = require('../../assets/pictures/bricks_to_heaven.png')

// Component Definition 
const LandingPage = () => {
  return (
    <>
     <BackgroundImage backgroundImage={backgroundImage}/>
    <h1>bob</h1>
    </>
  )
}

export default LandingPage;