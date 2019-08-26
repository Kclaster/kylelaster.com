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
    boxShadow: 'inset 0 0 0 3000px rgba(255,255,255,0.3);',
    height: '500px',
    position: 'relative',
    width: getWidth(props.width),
  });

function getWidth(width: BaseSizes) {
  return BASE_SIZES[width];
}

// Component Definition
const GlossedWindow: React.FC<Props> = (props) => {
  return <div className={getStyle(props)} />;
};

export default GlossedWindow;
