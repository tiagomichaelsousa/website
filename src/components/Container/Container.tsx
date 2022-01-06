import { styled } from '@theme/stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  py: '$64',
  '@mobile': {
    p: '$24',
  },

  // Custom
  ml: 'auto',
  mr: 'auto',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
        '@bp2': {
          px: '$32',
        },
      },
      '4': {
        maxWidth: 'none',
        padding: 0,
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
});
