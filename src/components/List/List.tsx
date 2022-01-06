import { styled } from '@theme/stitches.config';

export const List = styled('ul', {
  color: '$text',
  fontSize: '$16',
  lineHeight: '$24',
  listStyle: 'none',
  variants: {
    inline: {
      true: {
        display: 'contents',
        '& > :first-child': {
          '&::before': {
            content: '',
          },
        },
      },
    },
  },
});
