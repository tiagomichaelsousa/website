import React from 'react';
import { Box, Container, Heading } from '@components';
import { blink } from '@theme/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';

const Banner: React.FC = () => {
  return (
    <Container size="4" css={{ position: 'relative' }} as="section">
      <Container css={{ p: 0, position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            zIndex: '$1',
            display: 'flex',
            top: '30%',
            left: '12%',
          }}
        >
          <Heading size="4" color="primaryDark">
            Hi, I&apos;m
          </Heading>
          <Heading size="4" css={{ ml: '$8' }} color="white">
            Tiago Sousa
          </Heading>
        </Box>
        <Heading
          size="4"
          color="primaryDark"
          css={{
            position: 'absolute',
            zIndex: '$1',
            top: '40%',
            left: '12%',
          }}
        >
          And I&apos;m a
        </Heading>
        <Heading
          size="4"
          color="white"
          css={{
            position: 'absolute',
            zIndex: '$1',
            pr: '$8',
            borderRight: '0.1em solid $colors$primaryDark',
            animation: `${blink} 0.75s step-end infinite`,
            top: '50%',
            left: '12%',
          }}
        >
          Full-stack Engineer
        </Heading>
        <StaticImage
          src="../../images/banners/banner.png"
          alt="banner"
          title="banner"
          layout="fullWidth"
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
        />
      </Container>

      <Box css={{ position: 'absolute', top: 0, right: 0 }}>
        <StaticImage
          src="../../images/backgrounds/br.png"
          alt="background-image"
          title="background-image"
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
        />
      </Box>
    </Container>
  );
};

export default Banner;
