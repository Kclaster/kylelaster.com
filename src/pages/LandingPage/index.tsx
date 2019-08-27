// External Dependencies
import React from 'react';

// Internal Dependencies
import BackgroundImage from '../../components/BackgroundImage';
import CenterContentWrapper from '../../components/CenterContentWrapper';
import GlossedWindow from '../../components/GlossedWindow';
import Page from '../../components/Page';
const mobileBackgroundImage = require('../../assets/pictures/bricks_to_heaven.png');
const desktopBackgroundImage = require('../../assets/pictures/road.png');

// Component Definition
const LandingPage = () => {
  return (
    <Page>
      <BackgroundImage desktopBackgroundImage={desktopBackgroundImage} mobileBackgroundImage={mobileBackgroundImage} />
      <CenterContentWrapper>
      <GlossedWindow width="md" />
      </CenterContentWrapper>
    </Page>
  );
};

export default LandingPage;
