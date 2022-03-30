import { styled } from '@theme/stitches.config';

export const Pre = styled('pre', {
  $$background: '#6059f810',
  $$text: '$colors$white',
  $$syntax1: '#79A9FF',
  $$syntax2: '#B8EB80',
  $$syntax3: '#D18DF0',
  $$syntax4: '#6DDFFF',
  $$comment: '$colors$gray',
  $$removed: 'red',
  $$added: 'green',
  $$lineNumbers: '$colors$gray',
  $$fadedLines: '$colors$gray',
  $$highlightedWordBg: 'hsl(243deg 92% 66% / 30%)',
  $$highlightedWordBgActive: 'hsl(243deg 92% 66% / 30%)',
  $$highlightedWordText: '$colors$text',
  $$deletedWordBg: 'red',
  $$deletedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$deletedWordText: '$colors$black',
  $$addedWordBg: 'rgba(0, 245, 196, 0.1)',
  $$addedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$addedWordText: 'purple',

  borderRadius: '$4',
  boxSizing: 'border-box',
  padding: '$16',
  overflow: 'auto',
  fontSize: '$18',
  lineHeight: '$24',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: '$$background',
  '& > code': {
    display: 'block',
  },

  '.language-diff': {
    color: '$$comment',
  },

  '.token.parameter': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$$syntax3',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax4',
  },

  '.token.comment': {
    color: '$$comment',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$removed',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$added',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
    position: 'absolute',
    left: '$24',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWordBg',
    $$xOffset: '1px',
    textDecoration: 'none',
    color: '$$highlightedWordText',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',
    borderRadius: '$4',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&:is(a):hover, &.on': {
      $$bgAndShadow: '$$highlightedWordBgActive' as any,
      transition: 'all 100ms ease',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$deletedWordBg',
    color: '$$deletedWordText',

    '&.on': {
      $$bgAndShadow: '$$deletedWordBgActive' as any,
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$addedWordBg',
    color: '$$addedWordText',

    '&.on': {
      $$bgAndShadow: '$$addedWordBgActive' as any,
    },
  },

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },

  variants: {
    showLineNumbers: {
      true: {
        '.highlight-line': {
          position: 'relative',
          paddingLeft: '$24',

          '&::before': {
            content: 'attr(data-line)',
            position: 'absolute',
            left: -5,
            top: 0,
            color: '$$lineNumbers',
          },
        },
      },
    },
    theme: {
      yellow: {
        $$background: 'rgb(255 135 31 / 10%)',
        $$syntax1: '#5D6874',
        $$syntax2: '#B7AE3C',
        $$syntax3: '#EAC53C',
        $$syntax4: '#EAC53C',
      },
      pink: {
        $$background: 'rgba(0, 0, 100, 0.15)',
        $$syntax1: '#BA059C',
        $$syntax2: '#AE4992',
        $$syntax3: '#009CC1',
        $$syntax4: '#009CC1',
      },
    },
  },
});
