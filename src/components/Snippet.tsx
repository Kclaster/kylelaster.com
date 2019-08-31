// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Local Typings
interface Props {
  image: string;
}

// Local Variable
const StyledImg = styled.img({
  height: '200px',
});

const Wrapper = styled.div({
});

const Snippet: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <StyledImg
        alt="background weddings logo"
        src={props.image}
      />
    </Wrapper>
  );
};

export default Snippet;
