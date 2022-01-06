import { styled } from '@theme/stitches.config';

export const ListItem = styled('li', {
  color: '$text',
  fontSize: '$16',
  lineHeight: '$24',
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
});
