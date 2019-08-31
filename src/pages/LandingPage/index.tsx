// External Dependencies
import React from 'react';

// Internal Dependencies
import BackgroundImage from '../../components/BackgroundImage';
import Flex from '../../components/Flex';
import GlossedWindow from '../../components/GlossedWindow';
import Page from '../../components/Page';
import Snippet from '../../components/Snippet';
import Heading1 from '../../components/Text/Heading1';
import Paragraph from '../../components/Text/Paragraph';
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
      <Flex>
        <GlossedWindow
          height="60%"
          width="75%"
        >
          <Flex
            fullHeight={false}
            flexDirection="column"
          >
            <Heading1>My Portfolio</Heading1>
            <Snippet
              image={backgroundWeddingsSnippet}
              title="Background Weddings"
              text="Technologies Used: AWS, JavaScript, NodeJS, ReactJS"
            />
          </Flex>
        </GlossedWindow>
      </Flex>
    </Page>
  );
};

export default LandingPage;
