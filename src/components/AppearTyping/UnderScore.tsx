// External Dependencies
import React from 'react';

// Internal Dependencies
import { css } from 'emotion';
import { BASE_COLORS } from '../../constants/styles';

// Local Typings
interface Props {
  shouldRender: boolean;
}

// Local Variables
const getStyle = ({ shouldRender }: Props) => css({
  backgroundColor: shouldRender ? BASE_COLORS.WHITE : 'transparent',
  display: 'inline-block',
  height: '1em',
  width: '.5em',
});

// Component Definition
const UnderScore: React.FC<Props> = (props) => {
  return (
    <span className={getStyle(props)} />
  );
};

export default UnderScore;
