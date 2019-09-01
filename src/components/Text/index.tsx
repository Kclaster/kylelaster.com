// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { TextIndentProperty } from 'csstype';
import { FontSizes } from '../../constants/sizes';
import { BASE_COLORS } from '../../constants/styles';
import { getFontSize } from '../../utils/sizes';

// Local Typings
export interface TextProps {
  as?: any;
  color?: string;
  fontSize?: FontSizes;
  fontWeight?: number;
  textIndent?: TextIndentProperty<string>;
}

// Local Variable
const getStyle = ({
  color,
  fontSize = 'md',
  fontWeight = 400,
  textIndent = 'none',
}: TextProps) => css({
  color: color ? color : BASE_COLORS.WHITE,
  fontSize: getFontSize(fontSize),
  fontWeight,
  textDecoration: 'none',
  textIndent,
});

// Component Definition
const Text: React.FC<TextProps> = ({
  as = 'p',
  ...props
}) => {
  return React.createElement(
    as,
    {
      className: getStyle(props),
      ...props,
    }, props.children);
};

export default Text;
