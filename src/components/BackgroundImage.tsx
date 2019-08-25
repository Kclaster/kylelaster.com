// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { BASE_COLORS } from '../constants/styles'

// Local Typings
interface Props {
  backgroundImage: string;
}

interface ImageContainerProps {
  backgroundImage: string;
}

// Local Variables
const ImageContainer = styled.div<ImageContainerProps>((props: Props) => ({
  // background: `url(${props.backgroundImage} ${BASE_COLORS})`,
  background:  `url(${props.backgroundImage}) ${BASE_COLORS.WHITE}`,
  backgroundSize: 'cover',
  height: '100vh',
  width: '100vw',
  position: 'fixed'
}));

// Component Definition
const BackgroundImage:React.FC<Props> = (props) => {
  return (
    <ImageContainer {...props}/>
  )
}

export default BackgroundImage;