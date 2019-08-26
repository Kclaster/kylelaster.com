// External Dependencies
import {css} from 'emotion';
import React from 'react';

// Internal Dependencies
import { BaseSizes, BASE_SIZES } from '../../constants/sizes'

// Local Typings
interface Props {
  width: BaseSizes
};

// Local Variables
const getStyle = (props: Props) => css({
  width: getWidth(props.width),
  boxShadow: 'inset 0 0 0 3000px rgba(255,255,255,0.3);',
  height: '500px',
  position: 'relative',
});

function getWidth( width : BaseSizes) {
  return BASE_SIZES[width];
}

// Component Definition
const GlossedWindow: React.FC<Props> = (props) => {
  return (
    <div className={getStyle(props)} />
  )
}

export default GlossedWindow;
