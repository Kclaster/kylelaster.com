// External Dependencies
import React from 'react';

// Internal Dependencies
import {
  getSpace,
  PaddingSizes,
} from '../../constants/sizes';

// Local Typings
interface Props extends SpaceProps {
  children: React.ReactElement<any>;
}
export interface SpaceProps {
  margin?: PaddingSizes;
  marginBottom?: PaddingSizes;
  marginLeft?: PaddingSizes;
  marginRight?: PaddingSizes;
  marginTop?: PaddingSizes;
  marginX?: PaddingSizes;
  marginY?: PaddingSizes;
  padding?: PaddingSizes;
  paddingBottom?: PaddingSizes;
  paddingLeft?: PaddingSizes;
  paddingRight?: PaddingSizes;
  paddingTop?: PaddingSizes;
  paddingX?: PaddingSizes;
  paddingY?: PaddingSizes;
}

// Component Definition
const Space: React.FC<Props> = ({
  children,
  margin,
  marginY,
  marginX,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => {
  const style = {
    marginBottom: getSpace([marginBottom, marginY, margin]),
    marginLeft: getSpace([marginLeft, marginX, margin]),
    marginRight: getSpace([marginRight, marginX, margin]),
    marginTop: getSpace([marginTop, marginY, margin]),
    paddingBottom: getSpace([paddingBottom, paddingY, padding]),
    paddingLeft: getSpace([paddingLeft, paddingX, padding]),
    paddingRight: getSpace([paddingRight, paddingX, padding]),
    paddingTop: getSpace([paddingTop, paddingY, padding]),
  };

  return React.cloneElement(
    children, {
    style,
    ...children.props,
  }
  );
};

export default Space;
