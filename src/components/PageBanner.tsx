// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
});

const StyledImage = styled.img({
  maxHeight: '35vh',
  maxWidth: '80%',
});

// Local Typings
interface Props {
  alt: string;
  src: string;
}

// Component Definition
const PageBanner: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <StyledImage
        alt={props.alt}
        src={props.src}
      />
    </Wrapper>
  );
};

export default PageBanner;
