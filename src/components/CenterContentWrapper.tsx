// External Dependencies
import React from 'react';
import styled from '@emotion/styled'

// Internal Dependencies

// Local Variable
const Wrapper = styled.div({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

// Component Defintion
const CenterContentWrapper: React.FC = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};

export default CenterContentWrapper;
