// External Dependencies
import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
// Internal Dependencies

// Local Typings
interface Props {
  to: string;
}

// Component Definition
const Link: React.FC<Props> = (props) => {
  return (
    <RouterLink to={props.to}>
      {props.children}
    </RouterLink>
  )
}

export default Link;
