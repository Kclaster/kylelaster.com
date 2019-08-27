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
      <BackgroundImage
        desktopBackgroundImage={desktopBackgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
      />
      <CenterContentWrapper>
        <GlossedWindow
          height="60%"
          width="75%"
        />
      </CenterContentWrapper>
    </Page>
  );
};

export default LandingPage;
