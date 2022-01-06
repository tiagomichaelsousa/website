import { styled } from '@theme/stitches.config';
import { GatsbyImage as GatsbyPluginImage, StaticImage as GatsbyStaticImage } from 'gatsby-plugin-image';

export const StaticImage = styled(GatsbyStaticImage, {});
export const GatsbyImage = styled(GatsbyPluginImage, {
  // Reset
  verticalAlign: 'middle',
  maxWidth: '100%',
  borderRadius: '$3',
});

export const Img = styled('img', {
  // Reset
  verticalAlign: 'middle',
  maxWidth: '100%',
  borderRadius: '$12',
});
