// External Dependencies
import React from 'react';

// Internal Dependencies
import {
  getSpace,
  SpaceSizes,
} from '../constants/sizes';

// Local Typings
interface Props extends SpaceProps {
  children: React.ReactElement<any>;
}
export interface SpaceProps {
  margin?: SpaceSizes;
  marginBottom?: SpaceSizes;
  marginLeft?: SpaceSizes;
  marginRight?: SpaceSizes;
  marginTop?: SpaceSizes;
  marginX?: SpaceSizes;
  marginY?: SpaceSizes;
  padding?: SpaceSizes;
  paddingBottom?: SpaceSizes;
  paddingLeft?: SpaceSizes;
  paddingRight?: SpaceSizes;
  paddingTop?: SpaceSizes;
  paddingX?: SpaceSizes;
  paddingY?: SpaceSizes;
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
