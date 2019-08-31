// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { BASE_COLORS } from '../../constants/styles';
import { getFontSize } from '../../utils/sizes';
import { TextProps } from '../Text';

// Local Variable
const getStyle = ({
  color,
  fontSize = 'md',
  fontWeight = 400,
}: TextProps) => css({
  color: 'transparent',
  fontSize: getFontSize(fontSize),
  fontWeight,
  textDecoration: 'none',

  '&.text_wrapper:hover': {
    color: color ? color : BASE_COLORS.WHITE,
  },
});

// Component Definition
const HidingText: React.FC<TextProps> = (props) => {
  return (
    <p className={getStyle(props)}>
      {props.children}
    </p>
  );
};

export default HidingText;
