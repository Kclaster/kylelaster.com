// External Dependencies
import { AlignItemsProperty, FlexDirectionProperty, JustifyContentProperty } from 'csstype';
import { css } from 'emotion';
import React from 'react';

// Local Typings
interface Props {
  alignItems?: AlignItemsProperty;
  flexDirection?: FlexDirectionProperty;
  fullHeight?: boolean;
  fullWidth?: boolean;
  justifyContent?: JustifyContentProperty;
}

// Local Variable
const getStyle = ({
  alignItems = 'center',
  fullHeight = true,
  fullWidth = true,
  flexDirection,
  justifyContent = 'center',
}: Props) => css({
  alignItems,
  display: 'flex',
  flexDirection,
  height: fullHeight ? '100%' : 'auto',
  justifyContent,
  width: fullWidth ? '100%' : 'auto',
});

// Component Defintion
const Flex: React.FC<Props> = (props) => {
  return (
    <div className={getStyle(props)}>
      {props.children}
    </div>
  );
};

export default Flex;
