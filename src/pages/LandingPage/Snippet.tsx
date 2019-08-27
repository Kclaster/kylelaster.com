// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
const backgroundWeddingsLogo = require('../../assets/pictures/background_weddings.png');

// Local Variable
const StyledImg = styled.img({
  height: '200px',
});

const Wrapper = styled.div({
});

const Snippet: React.FC = () => {
  return (
    <Wrapper>
      <StyledImg
        alt="background weddings logo"
        src={backgroundWeddingsLogo}
      />
    </Wrapper>
  );
};

export default Snippet;
