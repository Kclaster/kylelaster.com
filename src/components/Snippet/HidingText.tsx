// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { BASE_COLORS } from '../../constants/styles';
import { getFontSize } from '../../utils/sizes';
import { TextProps } from '../Text';

// Local Typings
interface Props {
  isHovering?: boolean;
}

// Local Variable
const getStyle = ({
  color = BASE_COLORS.WHITE,
  fontSize = 'md',
  fontWeight = 400,
  isHovering,
}: TextProps & Props) => css({
  color: isHovering ? color : 'transparent',
  fontSize: getFontSize(fontSize),
  fontWeight,
  textDecoration: 'none',
});

// Component Definition
const HidingText: React.FC<TextProps & Props> = (props) => {
  return (
    <p className={getStyle(props)}>
      {props.children}
    </p>
  );
};

export default HidingText;
