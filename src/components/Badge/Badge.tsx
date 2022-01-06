import { styled } from '@theme/stitches.config';

export const Badge = styled('div', {
  borderRadius: '$circle',
  color: '$white',
  flexShrink: 0,
  fontSize: '$12',
  boxShadow: '$primary',
  variants: {
    size: {
      '1': {
        px: 18,
        py: '$8',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
    },
  },
  defaultVariants: {
    size: '1',
    color: 'primary',
  },
});
