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

const StyledLink = styled(Link)({
  fontFamily: 'Red Hat Text'
})

// Component Definition
const NavBar: React.FC = () => {
  return (
  <Wrapper>
    <StyledLink to={`/${ROUTES.BLOG}`}>Blog</StyledLink>
    <StyledLink to={`/${ROUTES.CLIENT_PORTAL}`}>Client Portal</StyledLink>
  </Wrapper>
  )
}

export default NavBar;
