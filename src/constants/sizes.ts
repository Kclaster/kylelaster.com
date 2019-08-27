import { string } from 'prop-types';

// Typings
export type BaseSizes =
  'sm' |
  'md' |
  'lg' |
  'xl' |
  'xxl' |
  'xxxl';

export type BasePercents =
  '25%' |
  '50%' |
  '60%' |
  '75%' |
  '90%' |
  '100%';

// Exports
export const HEADER_DIMENSIONS = {
  HEIGHT: '5vw',
};

export const NAVBAR_DIMENSIONS = {
  WIDTH: '315px',
};

export const BASE_SIZES: {
  [k in BaseSizes]: string;
} = {
  lg: '300px',
  md: '200px',
  sm: '100px',
  xl: '400px',
  xxl: '500px',
  xxxl: '600px',
};
