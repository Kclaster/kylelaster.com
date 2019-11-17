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

export type PaddingSizes =
  'sm' |
  'md' |
  'lg' |
  'xl' |
  'xxl' |
  'xxxl';

export const IMAGE_SIZES = {
  sm: '300px',
};

export const NAVBAR_DIMENSIONS = {
  WIDTH: '315px',
};

export const FONT_SIZES: {
  [k in FontSizes]: string;
} = {
  lg: '36px',
  md: '24px',
  sm: '16px',
  xl: '40px',
};

export const PADDING_SIZES: {
  [k in PaddingSizes]: string;
} = {
  xl: '48px',
  lg: '36px',
  md: '24px',
  sm: '12px',
  xxl: '72px',
  xxxl: '95px',
};

// Export Functions
// tslint:disable-next-line:prefer-array-literal
export function getSpace(spaces: Array<PaddingSizes | undefined>) {
  const space = spaces.find(val => !!val);
  if (!space) {
    return undefined;
  }

  return PADDING_SIZES[space];
}
