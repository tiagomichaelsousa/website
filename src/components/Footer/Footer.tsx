import React from 'react';
import { Button, Flex, Heading, Paragraph, Container } from '@components';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { StaticImage } from 'gatsby-plugin-image';
import usePersonalInfo from '@hooks/usePersonalInfo';

const Footer: React.FC = () => {
  const personalInfo = usePersonalInfo();

  return (
    <Container
      data-testid="footer-container"
      as="footer"
      id="contact"
      size={{
        '@initial': '4',
        '@bp4': '3',
      }}
      css={{
        pb: 0,
        position: 'relative',
      }}
    >
      <Heading
        size="4"
        color="contrast"
        css={{
          position: 'absolute',
          zIndex: '$1',
          left: '40%',
          lineHeight: '$64',
          maxWidth: '70%',
          '@mobile': {
            lineHeight: '$16',
            maxWidth: '50%',
            top: '12%',
          },
          '@bp1': { top: '25%' },
          '@bp2': { top: '30%' },
          '@bp3': { top: '30%', maxWidth: '45%' },
        }}
      >
        Interested in collaborating with me?
      </Heading>
      <Button
        as="a"
        href={`https://twitter.com/intent/tweet?text=Hey%20${personalInfo.social.twitter.handle}`}
        title={`https://twitter.com/intent/tweet?text=Hey%20${personalInfo.social.twitter.handle}`}
        target="_blank"
        rel="noreferrer"
        size={{
          '@mobile': '1',
          '@bp1': '2',
        }}
        css={{
          position: 'absolute',
          zIndex: '$1',
          top: '58%',
          left: '40%',
          '@mobile': {
            top: '40%',
          },
          '@bp1': {
            top: '52%',
          },
          '@bp4': {
            top: '55%',
          },
        }}
      >
        Let&apos;s Talk
        <ArrowRightIcon />
      </Button>

      <StaticImage
        src="../../images/banners/footer.png"
        alt="footer"
        title="footer"
        layout="fullWidth"
        placeholder="blurred"
        formats={['auto', 'webp', 'avif']}
      />

      <Flex
        justify="between"
        align="center"
        css={{
          bc: '$primary',
          position: 'relative',
          '@mobile': {
            btrr: 20,
            btlr: 20,
            mt: -24,
            px: '$16',
            py: '$8',
          },
          '@bp2': {
            btrr: 60,
            btlr: 60,
            mt: -90,
            px: '$56',
          },
          width: '100%',
        }}
      >
        <Paragraph
          color="white"
          size="12"
          css={{
            '@mobile': {
              textAlign: 'center',
            },
          }}
        >
          All the rights reserved © Tiago Sousa 2022
        </Paragraph>

        <StaticImage
          src="../../../static/images/memojis/memoji12.png"
          width={90}
          height={90}
          alt="memoji12"
          title="memoji12"
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
        />

        <Paragraph
          color="white"
          size="12"
          css={{
            '@mobile': {
              textAlign: 'center',
            },
          }}
        >
          Designed with love by Mauricio Oliveira
        </Paragraph>
      </Flex>
    </Container>
  );
};

export default Footer;
