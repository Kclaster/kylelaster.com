// External Dependencies
import React from 'react';

// Internal Dependencies
import { css } from 'emotion';
import Text from '../../components/Text';
import { BasePercents, SPACE_SIZES } from '../../constants/sizes';

// Local Typings
interface Props extends WrapperProps {
  children: string;
}

interface WrapperProps {
  width?: BasePercents | 'auto';
}

// Local Variable
const getStyle = ({
  width = 'auto',
}: WrapperProps) => css({
  marginTop: SPACE_SIZES.md,
  width,
});

// Component Definition
const AppearTyping: React.FC<Props> = ({
  children,
  ...props
}) => {
  const splitChildren = children.split('');
  console.log(splitChildren);

  return (
    <div className={getStyle(props)}>
      <Text textIndent="30px" fontSize="sm">
        {children}
      </Text>
    </div>
  );
};

export default AppearTyping;
