// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { IMAGE_SIZES } from '../../constants/sizes';
import Paragraph from '../Text/Paragraph';
import HidingText from './HidingText';

// Local Typings
export interface StyledImgProps {
  image: string;
  text: string;
  title: string;
}

// Local Variable
const StyledImg = styled.img({
  height: IMAGE_SIZES.sm,
});

const Wrapper = styled.div({
  position: 'relative',
});

const TextWrapper = styled.div({
  height: '100%',
  position: 'absolute',
  top: 0,
  width: '100%',

  ':hover': {
    background: 'rgba(0,0,0,.65)',
    cursor: 'pointer',
    zIndex: 2,
  },
});

const Snippet: React.FC<StyledImgProps> = (props) => {
  return (
    <Wrapper>
      <StyledImg
        alt="background weddings logo"
        src={props.image}
      />
      <TextWrapper className="text_wrapper">
        <HidingText>
          {props.title}
        </HidingText>
        <Paragraph>
          {props.text}
        </Paragraph>
      </TextWrapper>
    </Wrapper>
  );
};

export default Snippet;
