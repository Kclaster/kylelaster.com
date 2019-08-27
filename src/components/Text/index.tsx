// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { FontSizes } from '../../constants/sizes';
import { BASE_COLORS } from '../../constants/styles';
import { getFontSize } from '../../utils/sizes';

// Local Typings
interface TextProps {
  color?: string;
  fontSize: FontSizes;
  fontWeight?: number;
}

// Local Variable
const getStyle = ({
  color,
  fontSize,
  fontWeight,
}: TextProps) => css({
  color: color ? color : BASE_COLORS.WHITE,
  fontSize: getFontSize(fontSize),
  fontWeight,
});

// Component Definition
const Text: React.FC<TextProps> = (props) => {
  return (
    <p className={getStyle(props)}>
      {props.children}
    </p>
  );
};

export default Text;
