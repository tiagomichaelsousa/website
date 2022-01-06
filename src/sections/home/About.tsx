import React from 'react';
import { Card, Container, Flex, Heading, Paragraph, Svg } from '@components';
import { StaticImage } from 'gatsby-plugin-image';
import useAbout from '@hooks/useAbout';

const About: React.FC = () => {
  const { about } = useAbout();

  return (
    <Container id="about" as="section">
      <Flex align="center" direction="column" css={{ mb: '$32' }}>
        <Heading size="6" color="primary">
          About
        </Heading>
        <Heading size="5" css={{ mt: '$8' }}>
          A Little About Me:
        </Heading>

        <Flex align="center" direction="column" css={{ px: '$32', '@bp1': { display: 'none' } }}>
          <StaticImage
            src="../../images/memojis/memoji03.png"
            alt="memoji03"
            title="memoji03"
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </Flex>
      </Flex>

      <Flex align="center" justify="center" direction={{ '@initial': 'column', '@bp1': 'row' }} gap="24">
        <Flex direction="column" gap="24">
          {about.left.map(({ title, description, icon }) => (
            <Card
              key={title}
              align="center"
              direction="column"
              css={{
                '@mobile': { maxWidth: '100%' },
                '@bp1': { maxWidth: 300 },
              }}
            >
              <Svg color="primary" css={{ mb: '$8' }} dangerouslySetInnerHTML={{ __html: icon.childSvg.content.data }} size="64" />

              <Paragraph size="18" align="center" css={{ mb: '$4' }}>
                {title}
              </Paragraph>

              <Paragraph size="14" align="center" color="gray">
                {description}
              </Paragraph>
            </Card>
          ))}
        </Flex>

        <Flex align="center" direction="column" css={{ px: '$32', '@mobile': { display: 'none' } }}>
          <StaticImage
            src="../../images/memojis/memoji03.png"
            alt="memoji03"
            title="memoji03"
            placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
          />
        </Flex>

        <Flex direction="column" gap="24">
          {about.right.map(({ title, description, icon }) => (
            <Card
              key={title}
              align="center"
              direction="column"
              css={{
                '@mobile': { maxWidth: '100%' },
                '@bp1': { maxWidth: 300 },
              }}
            >
              <Svg color="primary" css={{ mb: '$8' }} dangerouslySetInnerHTML={{ __html: icon.childSvg.content.data }} size="64" />

              <Paragraph size="18" align="center" css={{ mb: '$4' }}>
                {title}
              </Paragraph>

              <Paragraph size="14" align="center" color="gray">
                {description}
              </Paragraph>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
