// External Dependencies
import React from 'react';

// Internal Dependencies
import BackgroundImage from '../../components/BackgroundImage';
import GlossedWindow from '../../components/GlossedWindow';
const mobileBackgroundImage = require('../../assets/pictures/bricks_to_heaven.png');
const desktopBackgroundImage = require('../../assets/pictures/road.png');

// Component Definition
const LandingPage = () => {
  return (
    <>
      <BackgroundImage desktopBackgroundImage={desktopBackgroundImage} mobileBackgroundImage={mobileBackgroundImage} />
      <GlossedWindow width="md" />
    </>
  );
};

export default LandingPage;
