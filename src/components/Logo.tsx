// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { Link } from 'react-router-dom';
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
const StyledLink = styled(Link)({
  border: BORDERS.STANDARD,
  borderRadius: '10000px',
  color: BASE_COLORS.WHITE,
  fontFamily: 'Red Hat Text',
  padding: PADDING_SIZES.sm,
  textDecoration: 'none',
  transition: `transform ${TRANSITION_TIME}`,

  '&:hover': {
    transform: `scale(${SCALE})`,
  },

});

// Component Definition
const Logo: React.FC = () => <StyledLink to="/">Portfolio</StyledLink>;

export default Logo;
