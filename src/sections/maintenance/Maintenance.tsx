import React from 'react';
import { Container, Flex, Heading, Paragraph, Link, Svg, Box } from '@components';
import { StaticImage } from 'gatsby-plugin-image';
import GitHubSvg from '@images/svgs/github.svg';
import MediumSvg from '@images/svgs/medium.svg';
import TwitterSvg from '@images/svgs/twitter.svg';
import LinkedinSvg from '@images/svgs/linkedin.svg';
import MoonSvg from '@images/svgs/moon.svg';
import SunSvg from '@images/svgs/sun.svg';
import usePersonalInfo from '@hooks/usePersonalInfo';
import useTheme, { LIGHT_THEME_KEY } from '@hooks/useTheme';

const Maintenance: React.FC = () => {
  const personalInfo = usePersonalInfo();
  const { handleThemeChange, theme } = useTheme();

  return (
    <Container size="3" css={{ py: 0 }}>
      <Flex
        direction="row"
        align="center"
        justify="center"
        css={{
          height: '100vh',
          '@mobile': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          css={{
            '@mobile': {
              width: 200,
            },
          }}
        >
          <StaticImage
            src="../../../static/images/memojis/memoji22.png"
            alt="memoji22"
            title="memoji22"
            placeholder="blurred"
            width={350}
            height={350}
            formats={['auto', 'webp', 'avif']}
          />
        </Box>
        <Flex
          direction="column"
          gap="16"
          css={{
            '@mobile': {
              alignItems: 'center',
            },
          }}
        >
          <Heading>Ouh Hey There 👋</Heading>
          <Heading size="4">I&apos;m not ready 👻</Heading>
          <Paragraph
            align={{
              '@mobile': 'center',
            }}
          >
            But in the meantime you can check my social media accounts
          </Paragraph>

          <Flex gap="24" css={{ my: '$24' }}>
            <Link
              href={personalInfo.social.github.url}
              title={personalInfo.social.github.url}
              target="_blank"
              variant="contrast"
              rel="noreferrer"
            >
              <Svg>
                <GitHubSvg />
              </Svg>
            </Link>

            <Link
              href={personalInfo.social.twitter.url}
              title={personalInfo.social.twitter.url}
              target="_blank"
              variant="contrast"
              rel="noreferrer"
            >
              <Svg>
                <TwitterSvg />
              </Svg>
            </Link>

            <Link
              href={personalInfo.social.medium.url}
              title={personalInfo.social.medium.url}
              target="_blank"
              variant="contrast"
              rel="noreferrer"
            >
              <Svg>
                <MediumSvg />
              </Svg>
            </Link>

            <Link
              href={personalInfo.social.linkedin.url}
              title={personalInfo.social.linkedin.url}
              target="_blank"
              variant="contrast"
              rel="noreferrer"
            >
              <Svg>
                <LinkedinSvg />
              </Svg>
            </Link>
          </Flex>

          <Flex gap="8">
            <Paragraph>And of course change the theme</Paragraph>
            <Svg onClick={handleThemeChange} color={theme == LIGHT_THEME_KEY ? 'primary' : 'yellow'}>
              {theme == LIGHT_THEME_KEY ? <MoonSvg /> : <SunSvg />}
            </Svg>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Maintenance;
