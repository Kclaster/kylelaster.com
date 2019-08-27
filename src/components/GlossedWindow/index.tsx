// External Dependencies
import { css } from 'emotion';
import React from 'react';
import { BasePercents } from '../../constants/sizes';

// Local Typings
interface Props {
  height: BasePercents;
  width: BasePercents;
}

// Local Variables
const getStyle = (props: Props) =>
  css({
    boxShadow: 'inset 0 0 0 3000px rgba(5,5,5,0.5);',
    height: props.height,
    position: 'relative',
    width: props.width,
  });

// Component Definition
const GlossedWindow: React.FC<Props> = (props) => {
  return (
    <div className={getStyle(props)}>
      {props.children}
    </div>
  );
};

export default GlossedWindow;
