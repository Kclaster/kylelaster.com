// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { PADDING_SIZES } from '../constants/sizes';

// Internal Dependencies

// Local Variable
const Wrapper = styled.div({
  padding: PADDING_SIZES.xxl,
});

// Component Definition
const Container: React.FC = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default Container;
