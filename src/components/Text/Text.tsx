import { styled } from '@theme/stitches.config';

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '8': {
        fontSize: '$8',
      },
      '12': {
        fontSize: '$12',
      },
      '14': {
        fontSize: '$14',
      },
      '16': {
        fontSize: '$16',
      },
      '18': {
        fontSize: '$18',
      },
      '24': {
        fontSize: '$24',
      },
      '28': {
        fontSize: '$28',
      },
      '32': {
        fontSize: '$32',
      },
      '40': {
        fontSize: '$40',
      },
      '48': {
        fontSize: '$48',
      },
      '56': {
        fontSize: '$56',
      },
      '64': {
        fontSize: '$64',
      },
      '72': {
        fontSize: '$72',
      },
    },
    align: {
      center: {
        textAlign: 'center',
      },
    },
    fontWeight: {
      900: {
        fontWeight: 900,
      },
      800: {
        fontWeight: 800,
      },
      700: {
        fontWeight: 700,
      },
      600: {
        fontWeight: 600,
      },
      500: {
        fontWeight: 500,
      },
      400: {
        fontWeight: 400,
      },
      300: {
        fontWeight: 300,
      },
      200: {
        fontWeight: 200,
      },
      100: {
        fontWeight: 100,
      },
      bold: {
        fontWeight: 'bold',
      },
    },
    color: {
      primary: {
        color: '$primary',
      },
      primaryDark: {
        color: '$primaryDark',
      },
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
      contrast: {
        color: '$contrast',
      },
      gray: {
        color: '$gray',
      },
      darkGray: {
        color: '$darkGray',
      },
    },
  },
  defaultVariants: {
    size: '8',
    color: 'contrast',
  },
});
