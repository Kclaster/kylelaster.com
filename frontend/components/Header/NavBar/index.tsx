// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { NAVBAR_DIMENSIONS } from '../../../constants/sizes';
import Link from '../../Link';

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: NAVBAR_DIMENSIONS.WIDTH,
});

const StyledLink = styled(Link)({
  fontFamily: 'Red Hat Text',
});

// Component Definition
const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink href="/blog">Blog</StyledLink>
      <StyledLink href="/contact-me">Contact Me</StyledLink>
      <StyledLink href="/admin">Admin</StyledLink>
    </Wrapper>
  );
};

export default NavBar;
