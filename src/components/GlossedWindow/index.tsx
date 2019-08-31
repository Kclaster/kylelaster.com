// External Dependencies
import { css } from 'emotion';
import React from 'react';
import { BasePercents, PADDING_SIZES } from '../../constants/sizes';

// Local Typings
interface Props {
  height?: BasePercents | 'auto';
  width: BasePercents;
}

// Local Variables
const getStyle = ({
  height = 'auto',
  width,
}: Props) =>
  css({
    boxShadow: 'inset 0 0 0 3000px rgba(5,5,5,0.5);',
    height,
    padding: PADDING_SIZES.md,
    position: 'relative',
    width,
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
