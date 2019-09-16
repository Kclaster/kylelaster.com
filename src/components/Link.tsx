// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BASE_COLORS, BORDERS, PADDING } from '../constants/styles';
// Internal Dependencies

// Local Typings
interface Props {
  to: string;
}

// Local Variables
const StyledRouterLink = styled(RouterLink)({
  borderBottom: BORDERS.HIDDEN,
  color: BASE_COLORS.WHITE,
  paddingBottom: PADDING.MD,
  textDecoration: 'none',

  '&:hover': {
    borderBottom: BORDERS.STANDARD,
  },

});

// Component Definition
const Link: React.FC<Props> = (props) => {
  return (
    <StyledRouterLink to={props.to}>
      {props.children}
    </StyledRouterLink>
  );
};

export default Link;
