import useLatestArticles from '@hooks/useLatestArticles';
import { Box, Card, Container, Flex, GatsbyImage, GatsbyLink, Heading, Paragraph, Badge } from '@components';
import React from 'react';
import { getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';

const Blog: React.FC = () => {
  const articles = useLatestArticles();

  return (
    <Container size="4" css={{ position: 'relative' }} id="blog" as="section">
      <Box css={{ position: 'absolute', top: 0, left: 0 }}>
        <StaticImage
          src="../../images/backgrounds/bl.png"
          alt="banner-left"
          title="banner-left"
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
          style={{
            maxWidth: 650,
          }}
        />
      </Box>
      <Container size="3">
        <Flex align="center" direction="column" css={{ px: '$32' }}>
          <Heading size="6" color="primary">
            Blog
          </Heading>
          <Heading size="5" css={{ mt: '$8', mb: '$24' }}>
            Some Ideas That I Have
          </Heading>
        </Flex>

        <Flex
          gap="32"
          wrap="wrap"
          css={{
            '@mobile': {
              justifyContent: 'center',
            },
            '@bp1': {
              '& > :first-child': {
                width: '100%',
                flexDirection: 'row',
                '& > a': {
                  paddingRight: '$32',
                },
                '& > div:nth-child(2)': {
                  width: '40%',
                },
              },
            },
          }}
        >
          {articles.map((article) => (
            <Card
              key={article.slug}
              align="center"
              direction="column"
              css={{
                width: 400,
                '@mobile': {
                  width: '100%',
                  flexDirection: 'column',
                },
              }}
            >
              <GatsbyLink to={article.slug} title={article.slug}>
                <GatsbyImage
                  image={getImage(article.image) as IGatsbyImageData}
                  alt={article.title}
                  title={article.title}
                  css={{ borderRadius: '$12' }}
                />
              </GatsbyLink>
              <Flex direction="column" css={{ height: '100%' }} justify="center">
                <GatsbyLink to={article.slug} title={article.slug}>
                  <Heading css={{ mt: '$16' }} size="6" fontWeight="600">
                    {article.title}
                  </Heading>
                </GatsbyLink>
                <Paragraph
                  size="14"
                  css={{
                    mt: '$16',
                    color: '$gray',
                    width: '100%',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    '-webkit-line-clamp': 4,
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {article.description}
                </Paragraph>

                <Flex gap="16" css={{ mt: '$16' }} wrap="wrap">
                  {article.categories.map((category) => (
                    <Badge color="primary" key={category}>
                      {category}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </Container>
  );
};

export default Blog;
