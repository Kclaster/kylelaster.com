// External Dependencies
import React from 'react';

// Internal Dependencies
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Page from '../../components/Page';
import PageBanner from '../../components/PageBanner';
import Snippet from '../../components/Snippet';
import { BASE_COLORS, LINEAR_GRADIENTS } from '../../constants/styles';
const reactLogo = require('../../assets/pictures/react.png');
const confusedBoyImage = require('../../assets/pictures/confused_kid.png');

// Component Definition
const Blog: React.FC = () => {
  return (
    <Page backgroundImage={LINEAR_GRADIENTS.GREY}>
      <Container>
        <PageBanner
          alt="Confused boy"
          src={confusedBoyImage}
        />
        <Flex justifyContent="space-between">
          <Snippet
            image={reactLogo}
            text="A place to store ideas and code worth storing."
            title="ReactJS"
          />
          <Snippet
            image={reactLogo}
            text="A place to store ideas and code worth storing."
            title="ReactJS"
          />
        </Flex>
      </Container>
    </Page>
  );
};

export default Blog;
