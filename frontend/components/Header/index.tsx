// External Dependecies
import styled from '@emotion/styled';
import React from 'react';

// Internal Depenencies
import { HEADER_DIMENSIONS, PADDING_SIZES } from '../../constants/sizes';
import Logo from '../Logo';
import NavBar from './NavBar';

// Local Variable
const Wrapper = styled.div({
  alignItems: 'flex-end',
  display: 'flex',
  height: `${HEADER_DIMENSIONS.HEIGHT}`,
  justifyContent: 'space-between',
  padding: `0 ${PADDING_SIZES.sm}`,
  position: 'fixed',
  width: '100vw',
  top: '0'
});

// Component Definition
const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <NavBar />
    </Wrapper>
  );
};

export default Header;
