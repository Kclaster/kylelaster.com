// External Dependencies
import React from 'react';
import Page from '../../components/Page';
import Snippet from '../../components/Snippet';
const reactLogo = require('../../assets/pictures/react.png');

// Internal Dependencies

// Component Definition
const Blog: React.FC = () => {
  return (
    <Page>
      <Snippet
        image={reactLogo}
        text="A place to store ideas and code worth storing."
        title="ReactJS"
      />
    </Page>
  );
};

export default Blog;
