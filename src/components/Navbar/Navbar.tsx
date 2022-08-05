import React from 'react';
import { Container, Flex, GatsbyLink, Link, Svg, NavbarMobile } from '@components';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import usePersonalInfo from '@hooks/usePersonalInfo';
import { StaticImage } from 'gatsby-plugin-image';
import GitHubSvg from '@images/svgs/github.svg';
import MediumSvg from '@images/svgs/medium.svg';
import TwitterSvg from '@images/svgs/twitter.svg';
import LinkedinSvg from '@images/svgs/linkedin.svg';
import MoonSvg from '@images/svgs/moon.svg';
import SunSvg from '@images/svgs/sun.svg';
import useTheme, { LIGHT_THEME_KEY } from '@hooks/useTheme';

const Navbar: React.FC = () => {
  const personalInfo = usePersonalInfo();
  const { handleThemeChange, theme } = useTheme();

  return (
    <Container css={{ pt: '$32', pb: 0 }} as="header">
      <Flex justify="between" align="center" css={{ '@mobile': { display: 'none' } }}>
        <GatsbyLink to="/" title="/">
          <StaticImage
            src="../../images/memojis/memoji01.png"
            alt="memoji01"
            title="memoji01"
            width={85}
            height={85}
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </GatsbyLink>

        <Flex gap="72" align="center" as="nav">
          <GatsbyLink to="/" title="/">
            Home
          </GatsbyLink>

          <GatsbyLink to="/#about" title="/#about">
            About
          </GatsbyLink>

          <GatsbyLink to="/#blog" title="/#blog">
            Blog
          </GatsbyLink>

          <GatsbyLink to="/#contact" title="/#contact" variant="button" size="1">
            Contact
          </GatsbyLink>
        </Flex>

        <Flex gap="24">
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
            <VisuallyHidden>GitHub</VisuallyHidden>
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
            <VisuallyHidden>Twitter</VisuallyHidden>
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
            <VisuallyHidden>Medium</VisuallyHidden>
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
            <VisuallyHidden>LinkedIn</VisuallyHidden>
          </Link>

          <Svg onClick={handleThemeChange} color={theme == LIGHT_THEME_KEY ? 'primary' : 'yellow'} pointer>
            {theme == LIGHT_THEME_KEY ? <MoonSvg /> : <SunSvg />}
          </Svg>
        </Flex>
      </Flex>

      <NavbarMobile />
    </Container>
  );
};

export default Navbar;
