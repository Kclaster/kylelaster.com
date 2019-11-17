// External Dependencies
import styled from '@emotion/styled';
import React, { useState } from 'react';

// Internal Dependencies
import {
  IMAGE_SIZES,
  PADDING_SIZES,
} from '../../../constants/sizes';
import { BASE_COLORS } from '../../../constants/styles';
import HidingText from './HidingText';
import Heading2 from '../Text/Heading2';
import Paragraph from '../Text/Paragraph';

// TODO: variant should be strongly typed
// Local Typings
export interface StyledImgProps {
  image: string;
  description: string;
  title: string;
  variant?: SnippetVariants;
}

export type SnippetVariants = 'normal' | 'hidden';

// Local Variable
const StyledImg = styled.img({
  height: IMAGE_SIZES.sm,
});

const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: PADDING_SIZES.sm,
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
    border: `1px solid ${BASE_COLORS.WHITE}`,
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: 2,
  },
});

const Snippet: React.FC<StyledImgProps> = ({
  variant = 'normal',
  ...props
}) => {
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
      {variant === 'hidden' ? (
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
            {props.description}
          </HidingText>
        </TextWrapper>
      ) : (
          <>
            <Heading2>{props.title}</Heading2>
            <Paragraph>{props.description}</Paragraph>
          </>
        )}
    </Wrapper>
  );
};

export default Snippet;
