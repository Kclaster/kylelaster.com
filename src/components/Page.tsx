// External Dependencies
import { BackgroundImageProperty } from 'csstype';
import { css } from 'emotion';
import React from 'react';

// Local Typings
interface StyleProps {
  backgroundImage?: BackgroundImageProperty;
}

// Local Variables
const getStyle = ({ backgroundImage }: StyleProps) => css({
  backgroundImage,
  height: '100vh',
  width: '100vw',
});

// Component Definition
const Page: React.FC<StyleProps> = (props) => {
  return (
    <div className={getStyle(props)}>
      {props.children}
    </div>
  );
};

export default Page;
