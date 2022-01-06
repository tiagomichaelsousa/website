import { styled } from '@theme/stitches.config';

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
  variants: {
    paper: {
      inherit: {
        backgroundColor: 'inherit',
      },
      default: {
        backgroundColor: '$paper',
      },
    },
  },
  defaultVariants: {
    paper: 'inherit',
  },
});
