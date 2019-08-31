// External Dependencies
import React from 'react';

// Internal Dependencies
import BackgroundImage from '../../components/BackgroundImage';
import CenterContentWrapper from '../../components/Flex';
import GlossedWindow from '../../components/GlossedWindow';
import Page from '../../components/Page';
import Snippet from '../../components/Snippet';
import Heading1 from '../../components/Text/Heading1';
const mobileBackgroundImage = require('../../assets/pictures/bricks_to_heaven.png');
const desktopBackgroundImage = require('../../assets/pictures/road.png');
const backgroundWeddingsSnippet = require('../../assets/pictures/background_weddings_snippet.png');

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
        >
          <CenterContentWrapper
            fullHeight={false}
            flexDirection="column"
          >
            <Heading1>My Portfolio</Heading1>
            <Snippet image={backgroundWeddingsSnippet} />
          </CenterContentWrapper>
        </GlossedWindow>
      </CenterContentWrapper>
    </Page>
  );
};

export default LandingPage;
