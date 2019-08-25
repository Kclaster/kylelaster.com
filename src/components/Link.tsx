// External Dependencies
import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import styled from '@emotion/styled';
import { BASE_COLORS, PADDING, BORDERS } from '../constants/styles';
// Internal Dependencies

// Local Typings
interface Props {
  to: string;
}

// Local Variables
const StyledRouterLink = styled(RouterLink)({
  color: BASE_COLORS.WHITE,
  textDecoration: 'none',
  paddingBottom: PADDING.MD,
  '&:hover': {
    borderBottom: BORDERS.STANDARD,
  }

})

// Component Definition
const Link: React.FC<Props> = (props) => {
  return (
    <StyledRouterLink to={props.to}>
      {props.children}
    </StyledRouterLink>
  )
}

export default Link;
