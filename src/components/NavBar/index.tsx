// External Dependencies
import React from 'react';

// Internal Dependencies
import Link from '../Link';
import { ROUTES } from '../../constants/routes';
import styled from '@emotion/styled';

// Local Variables
const Wrapper = styled.div({
  position: 'fixed',
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
})

// Component Definition
const NavBar: React.FC = () => {
  return (
  <Wrapper>
    <Link to={`/${ROUTES.BLOG}`}>Blog</Link>
    <Link to={`/${ROUTES.CLIENT_PORTAL}`}>Client Portal</Link>
  </Wrapper>
  )
}

export default NavBar;
