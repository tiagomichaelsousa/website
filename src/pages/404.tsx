import React from 'react';
import { Container, Flex, Heading, Paragraph, Box, GatsbyLink, Layout } from '@components';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage: React.FC = () => {
  return (
    <Layout page="404">
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
              src="../../static/images/memojis/memoji05.png"
              alt="memoji05"
              title="memoji05"
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
            <Heading>Oops 👻</Heading>
            <Heading size="4">Looks like I can&apos;t find what you are looking for</Heading>
            <Flex align="center" gap="8">
              <Paragraph
                align={{
                  '@mobile': 'center',
                }}
              >
                But you can still
              </Paragraph>
              <GatsbyLink to="/" title="/" variant="primary">
                go home
              </GatsbyLink>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
