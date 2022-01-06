import { styled } from '@theme/stitches.config';

export const Button = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  borderRadius: '$8',

  '& svg': {
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginLeft: '5px',
  },

  '&:disabled': {
    backgroundColor: '$primary',
    color: '$primary',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      1: {
        py: '$8',
        px: '$24',
        fontSize: '$16',
        '@mobile': {
          fontSize: '$12',
        },
      },
      2: {
        py: '$16',
        px: '$40',
        fontSize: '$16',
        '@mobile': {
          fontSize: '$12',
        },
      },
    },
    variant: {
      primary: {
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
    state: {
      active: {
        backgroundColor: '$primary',
        boxShadow: 'inset 0 0 0 1px $colors$primary',
        color: '$primary',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primary',
            boxShadow: 'inset 0 0 0 1px $colors$primary',
          },
        },
        '&:active': {
          backgroundColor: '$primary',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$primary, 0 0 0 1px $colors$primary',
        },
      },
      waiting: {
        backgroundColor: '$primary',
        boxShadow: 'inset 0 0 0 1px $colors$primary',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primary',
            boxShadow: 'inset 0 0 0 1px $colors$primary',
          },
        },
        '&:active': {
          backgroundColor: '$primary',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$primary',
        },
      },
    },
  },
  defaultVariants: {
    size: '2',
    variant: 'primary',
  },
});
