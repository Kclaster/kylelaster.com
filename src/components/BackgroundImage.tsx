// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Local Typings
interface Props {
  backgroundImage: string;
}

interface ImageContainerProps {
  backgroundImage: string;
}

// Local Variables
const ImageContainer = styled.div<ImageContainerProps>((props: Props) => ({
  backgroundImage: props.backgroundImage,
  backgroundSize: 'cover',
}));

// Component Definition
const BackgroundImage:React.FC<Props> = (props) => {
  return (
    <ImageContainer {...props}/>
  )
}

export default BackgroundImage;