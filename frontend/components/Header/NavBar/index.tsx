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

// Component Definition
const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/blog">Blog</Link>
      <Link href="/contact-me">Contact Me</Link>
      <Link href="/admin">Admin</Link>
    </Wrapper>
  );
};

export default NavBar;
