import { styled } from '@theme/stitches.config';

export const Svg = styled('picture', {
  variants: {
    color: {
      primary: {
        fill: '$primary',
        color: '$primary',
      },
      gray: {
        fill: '$gray',
        color: '$gray',
      },
      yellow: {
        fill: '$yellow',
        color: '$yellow',
      },
      contrast: {
        fill: '$contrast',
        color: '$contrast',
      },
      white: {
        fill: '$white',
        color: '$white',
      },
    },
    size: {
      24: {
        '& svg': {
          size: 24,
        },
      },
      32: {
        '& svg': {
          size: 32,
        },
      },
      40: {
        '& svg': {
          size: 40,
        },
      },
      64: {
        '& svg': {
          size: 64,
        },
      },
    },
    pointer: {
      true: {
        '@hover': {
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 24,
  },
});
