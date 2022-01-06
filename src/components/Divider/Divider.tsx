import { styled } from '@theme/stitches.config';

export const Divider = styled('div', {
  display: 'flex',
  mt: 20,
  variants: {
    variant: {
      thin: {
        alignItems: 'center',
        height: '1px',
        width: '100%',
        borderRadius: '$pill',
      },
      thick: {
        alignItems: 'center',
        height: '6px',
        width: '100%',
        borderRadius: '$pill',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
      gray: {
        backgroundColor: '$gray',
      },
      contrast: {
        backgroundColor: '$contrast',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'thin',
  },
});
