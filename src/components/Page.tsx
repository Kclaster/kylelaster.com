// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies

// Local Variables
const Wrapper = styled.div({
  height: '100vh',
  width: '100vw',
});

// Component Definition
const Page: React.FC = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default Page;
