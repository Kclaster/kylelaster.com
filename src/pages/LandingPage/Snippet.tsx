// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { BASE_SIZES } from '../../constants/sizes';

// Internal Dependencies
const backgroundWeddingsLogo = require('../../assets/pictures/background_weddings.png');

// Local Variable
const StyledImg = styled.img({
  height: BASE_SIZES.sm,
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
