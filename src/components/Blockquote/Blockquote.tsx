import { styled } from '@theme/stitches.config';

export const Blockquote = styled('blockquote', {
  margin: 0,
  m: '$16',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  bc: 'hsla(206 12% 89.5% / 10%)',
  boxShadow: '$primary',
  borderRadius: '$4',
  color: '$text',
  lineHeight: '$24',
  fontSize: '$14',
  py: '$16',
  px: '$24',
  my: '$24',
  '& > p:nth-child(2)': {
    m: 0,
  },
  '@mobile': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    mr: 0,
    ml: 0,
  },
});
