// External Dependencies
import React from 'react';

// Internal Dependencies
import AppearTyping from '../../components/AppearTyping';
import BackgroundImage from '../../components/BackgroundImage';
import Flex from '../../components/Flex';
import GlossedWindow from '../../components/GlossedWindow';
import Page from '../../components/Page';
import Snippet from '../../components/Snippet';
import Space from '../../components/Space';
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
      <Flex flexDirection="column">
        <GlossedWindow
          width="75%"
        >
          <Flex
            fullHeight={false}
            flexDirection="column"
          >
            <Space margin="xl">
              <Heading1>My Portfolio</Heading1>
            </Space>
            <Snippet
              image={backgroundWeddingsSnippet}
              title="Background Weddings"
              text="AWS, JavaScript, NodeJS, ReactJS"
            />
          </Flex>
        </GlossedWindow>
        <Space margin="xl">
          <AppearTyping width="75%">
            I am a	front-end web developer	with a focus in ReactJS. And I love turning static pages into interactive works of art. If you are looking to build up your developer team or just wanting to design your own website, I am waiting to hear from you below!
          </AppearTyping>
        </Space>
      </Flex>
    </Page>
  );
};

export default LandingPage;
