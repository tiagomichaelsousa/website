import { Link as GLink } from 'gatsby';
import { styled } from '@theme/stitches.config';

const styles = {
  alignItems: 'center',
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '$sizes$8',
  textDecorationColor: '$primary',
  textDecorationThickness: '10%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',

  '& svg': {
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginLeft: '5px',
  },

  variants: {
    underline: {
      true: {
        textDecoration: 'underline',
        '@hover': {
          '&:hover': {
            textDecorationLine: 'underline',
          },
        },
      },
    },
    size: {
      '1': {
        py: '$8',
        px: '$24',
        fontSize: '$16',
      },
      '2': {
        py: '$16',
        px: '$40',
        fontSize: '$16',
      },
    },
    variant: {
      contrast: {
        color: '$text',
        textDecoration: 'none',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$text',
          },
        },
        '&:focus': {
          outlineColor: '$text',
        },
      },
      primary: {
        color: '$primary',
        textDecorationColor: '$primary',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$primary',
            color: '$secondary',
          },
        },
        '&:focus': {
          outlineColor: '$primary',
        },
      },
      button: {
        fontWeight: 500,
        fontVariantNumeric: 'tabular-nums',
        borderRadius: '$8',
        backgroundColor: '$primary',
        boxShadow: 'inset 0 0 0 1px $colors$primary',
        color: '$white',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$primary',
          },
        },
        '&:active': {
          backgroundColor: '$primary',
          boxShadow: 'inset 0 0 0 1px $colors$primary',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$primary, 0 0 0 1px $colors$primary',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$primary',
          boxShadow: 'inset 0 0 0 1px $colors$primary',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
    underline: false,
  },
};

export const Link = styled('a', styles);
export const GatsbyLink = styled(GLink, styles);
