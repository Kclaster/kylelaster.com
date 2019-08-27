// Internal Dependencies
import {
  BASE_SIZES,
  BaseSizes,
} from '../constants/sizes';

// Export
export function getBaseSize(width: BaseSizes) {
  return BASE_SIZES[width];
}
