import React from 'react';
import merge from 'lodash.merge';
import { Text } from '@components';
import { CSS, VariantProps } from '@theme/stitches.config';

const DEFAULT_TAG = 'h1';

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
type HeadingSizeVariants = '1' | '2' | '3' | '4' | '5' | '6';
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & { css?: CSS; as?: any };

// eslint-disable-next-line react/display-name
export const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { size = '1', ...textProps } = props;
  // This is the mapping of Heading Variants to Text variants
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '56', '@mobile': '32', '@bp2': '64' },
    2: { '@initial': '48', '@mobile': '28', '@bp2': '56' },
    3: { '@initial': '40', '@mobile': '24', '@bp2': '48' },
    4: { '@initial': '32', '@mobile': '16', '@bp2': '40' },
    5: { '@initial': '24', '@mobile': '16', '@bp2': '32' },
    6: { '@initial': '16', '@mobile': '16', '@bp2': '24' },
  };

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    1: { fontWeight: 'bold', lineHeight: '$56', '@bp2': { lineHeight: '$64' } },
    2: { fontWeight: 'bold', lineHeight: '$48', '@bp2': { lineHeight: '$56' } },
    3: { fontWeight: 'bold', lineHeight: '$40', '@bp2': { lineHeight: '$48' } },
    4: { fontWeight: 'bold', lineHeight: '$32', '@bp2': { lineHeight: '$40' } },
    5: { fontWeight: 'bold', lineHeight: '$24', '@bp2': { lineHeight: '$32' } },
    6: { lineHeight: '$16', '@bp2': { lineHeight: '$24' } },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        ...merge(textCss[size], props.css),
      }}
    />
  );
});
