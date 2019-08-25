// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { BASE_COLORS } from '../constants/styles'

// Local Typings
interface Props {
  desktopBackgroundImage: string;
  mobileBackgroundImage: string;
}

// Local Variables
const ImageContainer = styled.div<Props>((props) => ({
  background:  `url(${props.desktopBackgroundImage}) ${BASE_COLORS.WHITE}`,
  backgroundSize: 'cover',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  '@media(max-width: 450px)': {
    background:  `url(${props.mobileBackgroundImage}) ${BASE_COLORS.WHITE}`,
  }
}));

// Component Definition
const BackgroundImage:React.FC<Props> = (props) => {
  return (
    <ImageContainer {...props}/>
  )
}

export default BackgroundImage;