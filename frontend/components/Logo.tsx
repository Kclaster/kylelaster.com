// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

// Internal Dependencies
import { PADDING_SIZES } from '../constants/sizes';
import {
  BASE_COLORS,
  BORDERS,
} from '../constants/styles';
import {
  SCALE,
  TRANSITION_TIME,
} from '../constants/transformations';

// Local Variables
const StyledLink = styled.a({
  cursor: 'pointer',
  border: BORDERS.PRIMARY.DARK,
  borderRadius: '10000px',
  color: BASE_COLORS.PRIMARY.DARK,
  fontFamily: 'Red Hat Text',
  padding: PADDING_SIZES.sm,
  textDecoration: 'none',
  transition: `transform ${TRANSITION_TIME}`,

  '&:hover': {
    transform: `scale(${SCALE})`,
  },

});

// Component Definition
const Logo: React.FC = () => <Link href="/"><StyledLink>Portfolio</StyledLink></Link>;

export default Logo;
