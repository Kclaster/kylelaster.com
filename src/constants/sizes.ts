// Typings
export type BasePercents =
  '25%' |
  '50%' |
  '60%' |
  '75%' |
  '90%' |
  '100%';

export type FontSizes =
  'sm' |
  'md' |
  'lg' |
  'xl';

// Exports
export const HEADER_DIMENSIONS = {
  HEIGHT: '5vw',
};

export const IMAGE_SIZES = {
  sm: '300px',
};

export const NAVBAR_DIMENSIONS = {
  WIDTH: '315px',
};

export const PADDING_SIZES = {
  md: '30px',
  sm: '15px',
};

export const FONT_SIZES: {
  [k in FontSizes]: string;
} = {
  lg: '36px',
  md: '24px',
  sm: '16px',
  xl: '40px',
};
