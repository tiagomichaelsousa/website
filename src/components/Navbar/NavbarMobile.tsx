import React, { useCallback, useState } from 'react';
import { Box, Flex, GatsbyLink, Link, Svg } from '@components';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import usePersonalInfo from '@hooks/usePersonalInfo';
import { StaticImage } from 'gatsby-plugin-image';
import TwitterSvg from '@images/svgs/twitter.svg';
import GitHubSvg from '@images/svgs/github.svg';
import MediumSvg from '@images/svgs/medium.svg';
import MenuSvg from '@images/svgs/menu.svg';
import CrossSvg from '@images/svgs/cross.svg';
import LinkedinSvg from '@images/svgs/linkedin.svg';
import MoonSvg from '@images/svgs/moon.svg';
import SunSvg from '@images/svgs/sun.svg';
import useTheme from '@hooks/useTheme';

export const LIGHT_THEME_KEY = 'light-theme';
export const THEME_KEY = 'theme';

const NavbarMobile: React.FC = () => {
  const personalInfo = usePersonalInfo();
  const [handleThemeChange, theme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <Box>
      <Flex justify="between" align="center" css={{ '@bp1': { display: 'none' } }}>
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

        <Svg onClick={handleToggleModal} color="contrast">
          <MenuSvg />
        </Svg>
      </Flex>
      {isMenuOpen && (
        <Flex
          direction="column"
          justify="between"
          css={{
            backgroundColor: '$paper',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '$max',
            py: '$32',
            px: '$24',
          }}
        >
          <Flex align="center" justify="between" css={{ width: '100%' }}>
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
            <Svg onClick={handleToggleModal} color="contrast">
              <CrossSvg />
            </Svg>
          </Flex>

          <Flex gap="72" align="center" as="nav" direction="column">
            <GatsbyLink to="/" title="/" onClick={handleToggleModal}>
              Home
            </GatsbyLink>

            <GatsbyLink to="/#about" title="/#about" onClick={handleToggleModal}>
              About
            </GatsbyLink>

            <GatsbyLink to="/#blog" title="/#blog" onClick={handleToggleModal}>
              Blog
            </GatsbyLink>

            <GatsbyLink to="/#contact" title="/#contact" variant="button" size="1" onClick={handleToggleModal}>
              Contact
            </GatsbyLink>
          </Flex>

          <Flex gap="24" justify="center">
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
      )}
    </Box>
  );
};

export default NavbarMobile;
