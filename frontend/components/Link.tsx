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
const StyledLink = styled.a({
  cursor: 'pointer',
  borderBottom: BORDERS.HIDDEN,
  color: BASE_COLORS.PRIMARY.DARK,
  paddingBottom: PADDING.MD,
  textDecoration: 'none',

  '&:hover': {
    borderBottom: BORDERS.STANDARD,
  },

});

// Component Definition
const Link: React.FC<Props> = (props) => {
  return (
    <NextLink href={props.href}>
      <StyledLink>
        {props.children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
