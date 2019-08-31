// External Dependencies
import { TextDecorationProperty } from 'csstype';
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { BASE_COLORS } from '../../constants/styles';
import { getFontSize } from '../../utils/sizes';
import { TextProps } from '../Text';

// Local Typings
interface Props {
  as?: any;
  isHovering?: boolean;
  textDecoration?: TextDecorationProperty;
}

// Local Variable
const getStyle = ({
  color = BASE_COLORS.WHITE,
  fontSize = 'md',
  fontWeight = 400,
  textDecoration = 'none',
  isHovering,
}: TextProps & Props) => css({
  color: isHovering ? color : 'transparent',
  fontSize: getFontSize(fontSize),
  fontWeight,
  textDecoration,
});

// Component Definition
const HidingText: React.FC<TextProps & Props> = ({
  as = 'p',
  isHovering,
  ...props
}) => {
  return React.createElement(
    as,
    {
      className: getStyle({
        isHovering,
        ...props,
      }),
      ...props,
    },
    props.children);
};

export default HidingText;
