// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Link from '../../Link';
import { ROUTES } from '../../../constants/routes';
import { NAVBAR_DIMENSIONS } from '../../../constants/sizes'

// Local Variables
const Wrapper = styled.div({
  width: NAVBAR_DIMENSIONS.WIDTH,
  display: 'flex',
  justifyContent: 'space-around',
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
