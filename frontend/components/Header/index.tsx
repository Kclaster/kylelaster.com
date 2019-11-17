// External Dependecies
import styled from '@emotion/styled';
import React, { useRef, useEffect, useState } from 'react';

// Internal Depenencies
import { PADDING_SIZES } from '../../constants/sizes';
import Logo from '../Logo';
import NavBar from './NavBar';
import { BASE_COLORS } from '../../constants/styles';

// Local Typings
interface StyledProps {
  height: number;
}

// Local Variable
const AbsoluteWrapper = styled.div({
  alignItems: 'flex-end',
  background: BASE_COLORS.OFF_WHITE,
  display: 'flex',
  justifyContent: 'space-between',
  padding: PADDING_SIZES.sm,
  position: 'fixed',
  width: '100vw',
  top: '0'
});

const RelativeWrapper = styled.div((props: StyledProps) => ({
  height: props.height
}));

// Component Definition
const Header: React.FC = () => {
  const [height, setHeight] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current && wrapperRef.current.clientHeight) {
      setHeight(wrapperRef.current.clientHeight);
    }
  }, [wrapperRef.current && wrapperRef.current.clientHeight])

  return (
    <>
      <AbsoluteWrapper ref={wrapperRef}>
        <Logo />
        <NavBar />
      </AbsoluteWrapper>
      <RelativeWrapper height={height} />
    </>
  );
};

export default Header;
