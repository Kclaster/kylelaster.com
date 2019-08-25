// External Dependecies
import React from 'react';
import styled from '@emotion/styled';

// Internal Depenencies
import Logo from '../Logo';
import NavBar from './NavBar';
import { HEADER_DIMENSIONS } from '../../constants/sizes'

// Local Variable
const Wrapper = styled.div({
    height: HEADER_DIMENSIONS.HEIGHT,
    width: '100vw',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
})

// Component Definition
const Header: React.FC = () => {
    return (
        <Wrapper>
            <Logo />
            <NavBar />
        </Wrapper>
    )
}

export default Header;