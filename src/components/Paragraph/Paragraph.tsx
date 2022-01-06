import React from 'react';
import { Text } from '@components';
import merge from 'lodash.merge';
import { CSS, VariantProps } from '@theme/stitches.config';

const DEFAULT_TAG = 'p';

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
type ParagraphSizeVariants = '8' | '12' | '14' | '16' | '18' | '28' | '32';
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> & ParagraphVariants & { css?: CSS; as?: any };

export const Paragraph = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, ParagraphProps>((props, forwardedRef) => {
  // '2' here is the default Paragraph size variant
  const { size = '16', ...textProps } = props;

  // This is the mapping of Paragraph Variants to Text variants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    8: { '@mobile': '8', '@bp1': '8' },
    12: { '@mobile': '12', '@bp1': '12' },
    14: { '@mobile': '14', '@bp1': '14' },
    16: { '@mobile': '16', '@bp1': '16' },
    18: { '@mobile': '18', '@bp1': '18' },
    28: { '@mobile': '28', '@bp1': '28' },
    32: { '@mobile': '32', '@bp1': '32' },
  };

  // This is the mapping of Paragraph Variants to Text css
  const textCss: Record<ParagraphSizeVariants, CSS> = {
    8: { lineHeight: '14px', '@bp1': { lineHeight: '14px' } },
    12: { lineHeight: '14px', '@bp1': { lineHeight: '14px' } },
    14: { lineHeight: '18px', '@bp1': { lineHeight: '18px' } },
    16: { lineHeight: '25px', '@bp1': { lineHeight: '27px' } },
    18: { lineHeight: '24px', '@bp1': { lineHeight: '24px' } },
    28: { lineHeight: '28px', '@bp1': { lineHeight: '28px' } },
    32: { lineHeight: '28px', '@bp1': { lineHeight: '28px' } },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      ref={forwardedRef}
      size={textSize[size]}
      {...textProps}
      css={{
        '& > code': {
          color: '$text',
          bc: 'hsl(243deg 92% 66% / 30%)',
          px: 8,
          py: 2,
          br: '$4',
          fontSize: 'inherit',
        },
        ...merge(textCss[size], props.css),
      }}
    />
  );
});
