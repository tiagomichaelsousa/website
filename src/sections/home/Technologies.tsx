import React from 'react';
import { Box, Carousel, Container, Flex, Link, Paragraph, Svg } from '@components';
import { StaticImage } from 'gatsby-plugin-image';
import useTechnologies from '@hooks/useTechnologies';
import { SwiperSlide } from 'swiper/react';

const Technologies: React.FC = () => {
  const technologies = useTechnologies();

  return (
    <Container size="3" as="section">
      <Flex
        align="center"
        direction={{
          '@mobile': 'column',
          '@bp1': 'row',
        }}
      >
        <Box css={{ minWidth: 215 }}>
          <StaticImage
            src="../../../static/images/memojis/memoji56.png"
            alt="memoji56"
            title="memoji56"
            placeholder="blurred"
            width={215}
            formats={['auto', 'webp', 'avif']}
          />
        </Box>
        <Paragraph
          size="28"
          color="contrast"
          fontWeight="600"
          css={{
            textAlign: 'center',
            minWidth: '240px',
            lineHeight: '$32',
            '@mobile': { fontSize: '$16' },
            '@bp1': { mr: '$32' },
          }}
        >
          Technologies that I work with
        </Paragraph>

        <Carousel css={{ mt: '$32', '@mobile': { width: '100%' } }}>
          {technologies.map((technology, index) => (
            <SwiperSlide key={technology.url}>
              <Link href={technology.url} title={technology.url} target="_blank" rel="noreferrer">
                <Svg
                  data-testid={`technology-logo-${index}`}
                  css={{ fill: technology?.color, color: technology?.color }}
                  dangerouslySetInnerHTML={{ __html: technology.logo.svg.content }}
                  size="64"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Carousel>
      </Flex>
    </Container>
  );
};

export default Technologies;
