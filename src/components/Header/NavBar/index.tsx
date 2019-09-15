// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { ROUTES } from '../../../constants/routes';
import { NAVBAR_DIMENSIONS } from '../../../constants/sizes';
import Link from '../../Link';

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: NAVBAR_DIMENSIONS.WIDTH,
});

const StyledLink = styled(Link)({
  fontFamily: 'Red Hat Text',
});

// Component Definition
const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink to={`${ROUTES.BLOG}`}>Blog</StyledLink>
      <StyledLink to={`${ROUTES.CLIENT_PORTAL}`}>Client Portal</StyledLink>
      <StyledLink to={`${ROUTES.CONTACT_ME}`}>Contact Me</StyledLink>
    </Wrapper>
  );
};

export default NavBar;
