// External Dependencies
import { FlexDirectionProperty } from 'csstype';
import { css } from 'emotion';
import React from 'react';

// Local Typings
interface Props {
  flexDirection?: FlexDirectionProperty;
  fullHeight?: boolean;
  fullWidth?: boolean;
}

// Local Variable
const getStyle = ({
  fullHeight = true,
  fullWidth = true,
  flexDirection,
}: Props) => css({
  alignItems: 'center',
  display: 'flex',
  flexDirection,
  height: fullHeight ? '100%' : 'auto',
  justifyContent: 'center',
  width: fullWidth ? '100%' : 'auto',
});

// Component Defintion
const CenterContentWrapper: React.FC<Props> = (props) => {
  return (
    <div className={getStyle(props)}>
      {props.children}
    </div>
  );
};

export default CenterContentWrapper;
