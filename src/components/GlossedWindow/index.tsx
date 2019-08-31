// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import {
  BASE_SIZES,
  BaseSizes,
} from '../../constants/sizes';

// Local Typings
interface Props {
  width: BaseSizes;
}

// Local Variables
const getStyle = (props: Props) =>
  css({
    background: 'inherit',
    height: '350px',
    overflow: 'hidden',
    position: 'absolute',
    width: '250px',

    '&:before': {
      boxShadow: 'inset 0 0 0 3000px rgba(255,2555,255,0.3)',
      filter: 'blur(10px)',
      height: '500px',
      position: 'relative',
      width: getWidth(props.width),
    },
  });

function getWidth(width: BaseSizes) {
  return BASE_SIZES[width];
}

// Component Definition
const GlossedWindow: React.FC<Props> = (props) => {
  return <div className={getStyle(props)} />;
};

export default GlossedWindow;
