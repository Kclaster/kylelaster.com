// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies

// Local Typings
interface Props {
  color?: string;
}

// Local Variable
const StyledText = styled.p((props: Props) => ({
  color: props.color ? props.color : 'white',
}));

// Component Definition
const Text: React.FC<Props> = (props) => {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  );
};

export default Text;
