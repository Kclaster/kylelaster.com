// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import NextLink from 'next/link';
import { BASE_COLORS, BORDERS, PADDING } from '../constants/styles';
// Internal Dependencies

// Local Typings
interface Props {
  href: string;
}

// Local Variables
const StyledLink = styled(NextLink)({
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
    <StyledLink href={props.href}>
      <a>
        {props.children}
      </a>
    </StyledLink>
  );
};

export default Link;
