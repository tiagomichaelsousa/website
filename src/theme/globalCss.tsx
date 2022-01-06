import { globalCss } from '@theme/stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  body: {
    margin: '0',
    fontFamily: '$montserrat',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    lineHeight: '1',
  },
  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },
  'html, body': {
    height: '100%',
  },
  '*': {
    scrollBehavior: 'smooth !important',
  },
});
