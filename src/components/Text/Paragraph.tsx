// External Dependencies
import React from 'react';
import Text from '.';

// Internal Dependencies

// Component Definition
const Paragraph: React.FC = (props) => {
  return (
    <Text fontSize="sm">
      {props.children}
    </Text>
  );
};

export default Paragraph;
