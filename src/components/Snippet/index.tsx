// External Dependencies
import styled from '@emotion/styled';
import React, { useState } from 'react';

// Internal Dependencies
import {
  IMAGE_SIZES,
  PADDING_SIZES,
} from '../../constants/sizes';
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
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'flex-end',
  padding: PADDING_SIZES.md,
  position: 'absolute',
  top: 0,
  width: '100%',

  '&:hover': {
    background: 'rgba(0,0,0,.65)',
    cursor: 'pointer',
    zIndex: 2,
  },
});

const Snippet: React.FC<StyledImgProps> = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <Wrapper>
      <StyledImg
        alt="background weddings logo"
        src={props.image}
      />
      <TextWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HidingText
          fontSize="md"
          isHovering={isHovering}
          textDecoration="underline"
        >
          {props.title}
        </HidingText>
        <HidingText
          fontSize="sm"
          isHovering={isHovering}
        >
          <HidingText
            as="span"
            fontSize="sm"
            fontWeight={700}
            isHovering={isHovering}
          >
            Technologies Used:
            {' '}
          </HidingText>
          {props.text}
        </HidingText>
      </TextWrapper>
    </Wrapper>
  );
};

export default Snippet;
