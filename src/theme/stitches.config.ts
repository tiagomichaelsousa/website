import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export type { VariantProps } from '@stitches/react';
export type CSS = Stitches.CSS<typeof config>;

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config } = createStitches({
  prefix: 'ts',
  theme: {
    colors: {
      primary: '#6059F8',
      primaryDark: '#172288',
      secondary: '#7B75F9',
      gray: '#757575',
      darkGray: '#454545',
      white: '#ffffff',
      black: '#000000',
      text: '#000000',
      contrast: '#000000',
      paper: '#ffffff',
      yellow: '#EFC65D',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    shadows: {
      primary: '0px 6px 24px rgba(126, 139, 255, 0.24)',
    },
    fonts: {
      montserrat: 'Montserrat, -apple-system, system-ui, sans-serif',
    },
    space: {
      '4': '0.25rem',
      '8': '0.5em',
      '16': '1em',
      '24': '1.5em',
      '32': '2em',
      '40': '2.5em',
      '48': '3em',
      '56': '3.5em',
      '64': '4em',
      '72': '4.5em',
    },
    sizes: {
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem',
      '56': '3.5rem',
      '64': '4rem',
      '72': '4.5rem',
    },
    lineHeights: {
      '4': '0.25rem',
      '8': '0.5rem',
      '16': '1rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem',
      '56': '3.5rem',
      '64': '4rem',
      '72': '4.5rem',
    },
    fontSizes: {
      '8': '0.5em',
      '12': '0.75em',
      '14': '0.875em',
      '16': '1em',
      '18': '1.125em',
      '24': '1.5em',
      '28': '1.75em',
      '32': '2em',
      '40': '2.5em',
      '48': '3em',
      '56': '3.5em',
      '64': '4em',
      '72': '4.5em',
    },
    radii: {
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12px',
      24: '24px',
      32: '32px',
      round: '50%',
      circle: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    mobile: '(max-width: 520px)',
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-yellowuced-motion)',
    hover: '(any-hover: hover)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    width: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    text: '#ffffff',
    contrast: '#ffffff',
    paper: '#040620',
    gray: '#B8B8B8',

    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});

export const blink = keyframes({
  'from, to': {
    borderColor: 'transparent',
  },
  '50%': {
    borderColor: 'black',
  },
});
