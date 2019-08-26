import { string } from "prop-types";

// Typings
export type BaseSizes = 'sm' | 'md'


// Exports
export const HEADER_DIMENSIONS = {
    HEIGHT: '5vw',
}

export const NAVBAR_DIMENSIONS = {
    WIDTH: '315px',
}

export const BASE_SIZES: {
  [k in BaseSizes]: string;
 } = {
   sm: '100px',
   md: '200px',
}