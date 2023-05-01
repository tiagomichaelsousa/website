import { styled } from '@theme/stitches.config';

export const ListItem = styled('li', {
  color: '$text',
  fontSize: '$16',
  lineHeight: '$40',
  '& > code': {
    color: '$text',
    bc: 'hsl(243deg 92% 66% / 30%)',
    px: 8,
    py: 2,
    br: '$4',
    fontSize: 'inherit',
  },
  '&::before': {
    content: '●',
    color: '$primary',
    fontWeight: 'bold',
    display: 'inline-block',
    marginLeft: '-1em',
    marginRight: '1em',
    verticalAlign: 'middle',
    '@mobile': {
      display: 'inline',
    },
  },
  '& > ul > li': {
    '&::before': {
      content: '⭘',
      color: '$primary',
      fontWeight: 'bold',
      display: 'inline-block',
      marginLeft: '-1em',
      marginRight: '1em',
      verticalAlign: 'middle',
      '@mobile': {
        display: 'inline',
      },
    },
    '& > code': {
      color: '$text',
      bc: 'hsl(243deg 92% 66% / 30%)',
      px: 8,
      py: 2,
      br: '$4',
      fontSize: 'inherit',
    }
  },
});
