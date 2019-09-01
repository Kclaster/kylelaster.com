// External Dependencies
import React from 'react';

// Internal Dependencies
import { getSpaceSizes, SpaceSizes } from '../constants/sizes';

// Local Typings
interface Props extends SpaceProps {
  children: React.ReactElement<any>;
}

interface SpaceProps {
  margin?: SpaceSizes;
  padding?: SpaceSizes;
}

// Local

// Component Definition
const Space: React.FC<Props> = ({
  children,
  margin,
  padding,
}) => {
  const style = {
    marginBottom: getSpaceSizes(margin),
    marginLeft: getSpaceSizes(margin),
    marginRight: getSpaceSizes(margin),
    marginTop: getSpaceSizes(margin),
    paddingBottom: getSpaceSizes(padding),
    paddingLeft: getSpaceSizes(padding),
    paddingRight: getSpaceSizes(padding),
    paddingTop: getSpaceSizes(padding),
  };

  console.log('akuna', style);
  return React.cloneElement(
    children, {
      style,
      ...children.props,
    }
  );
};

export default Space;
