import React, { useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from 'components/Layout/Layout';
import {
  Box,
  Container,
  Divider,
  Flex,
  GatsbyLink,
  Heading,
  Link,
  List,
  ListItem,
  MdxComponents,
  MDXProvider,
  MDXRenderer,
  Paragraph,
  Svg,
} from '@components';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import TwitterSvg from '@images/svgs/twitter.svg';
import GitHubSvg from '@images/svgs/github.svg';
import MediumSvg from '@images/svgs/medium.svg';
import LinkedinSvg from '@images/svgs/linkedin.svg';
import TagSvg from '@images/svgs/tag.svg';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import useSiteMetadata from '@hooks/useSiteMetadata';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { Author } from '@types/Author';
import moment from 'moment';

const Article = ({ data: { mdx } }: PageProps<{ mdx: ArticlePageProps }>) => {
  const { siteUrl } = useSiteMetadata();

  const {
    frontmatter: { title, date, dateFormated, categories, authors, description, slug },
    filepath,
    timeToRead,
    body,
    excerpt,
  } = mdx;

  const twitterHandles = useMemo(() => authors.map((author) => author.social.twitter.handle).join(', '), [authors]);
  const authorsNames = useMemo(() => authors.map((author) => author.name), [authors]);

  return (
    <Layout page={title}>
      <GatsbySeo
        canonical={`${siteUrl}/${slug}`}
        title={title}
        description={excerpt}
        openGraph={{
          type: 'article',
          title,
          description: excerpt,
          url: `${siteUrl}/${slug}`,
          article: {
            publishedTime: date,
            modifiedTime: date,
            authors: authorsNames,
            tags: categories,
          },
          images: [
            {
              url: `https://res.cloudinary.com/tiagomichaelsousa/image/upload/co_white,l_text:Montserrat_20:Check%20out%20this%20article,x_-45,y_-60/c_fit,co_white,l_text:Montserrat_40_bold:${title},w_650,x_120,y_10/v1/articles/seo-article_pw6fpl.png`,
              alt: title,
            },
          ],
        }}
        twitter={{
          handle: twitterHandles,
          site: `${siteUrl}/${slug}`,
          cardType: 'summary_large_image',
        }}
      />

      <Container css={{ p: '$24' }} as="article">
        <Flex direction="column" align="center" gap="32" css={{ '@initial': { mt: '$16' }, '@bp1': { mt: '$32' }, mb: '$72' }}>
          <Svg color="white" size="32" css={{ p: '$16', bc: '$primary', br: '$circle' }}>
            <TagSvg />
          </Svg>
          <Flex direction="column" align="center">
            <Paragraph>{dateFormated}</Paragraph>
            <Paragraph color="gray">{moment(date).fromNow()}</Paragraph>
            <Paragraph color="gray" size="12">
              {timeToRead} minutes read
            </Paragraph>
          </Flex>
          <Flex gap="16" css={{ '@mobile': { overflowX: 'scroll', width: '100%' } }}>
            <List inline>
              {categories.map((category) => (
                <ListItem key={category} css={{ mr: '$8' }}>
                  {category}
                </ListItem>
              ))}
            </List>
          </Flex>
          <Heading align="center">{title}</Heading>
          <Paragraph align="center" css={{ '@initial': { maxWidth: '100%' }, '@bp1': { maxWidth: '65%' } }}>
            {description}
          </Paragraph>

          {authors.map((author) => (
            <Flex gap="24" align="center" key={author.id}>
              <Box css={{ size: 86 }}>
                <GatsbyImage
                  image={getImage(author.avatar) as IGatsbyImageData}
                  alt={author.name}
                  title={author.name}
                  style={{ borderRadius: '999999px' }}
                />
              </Box>
              <Flex direction="column" gap="8">
                <GatsbyLink to={`#${author.id}`}>
                  <Heading size="6">{author.name}</Heading>
                </GatsbyLink>

                <Paragraph color="gray">{author.company.role}</Paragraph>
              </Flex>
            </Flex>
          ))}
        </Flex>

        <MDXProvider components={MdxComponents}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{body}</MDXRenderer>
        </MDXProvider>

        <Flex justify="between" css={{ mt: '$64', mb: '$32', '@mobile': { flexDirection: 'column', gap: '$32' } }}>
          <Link
            href={`https://twitter.com/intent/tweet?url=${siteUrl}/${slug}&text=I+just+read+%22${title}%22+by+${twitterHandles}%0A`}
            title={`https://twitter.com/intent/tweet?url=${siteUrl}/${slug}&text=I+just+read+%22${title}%22+by+${twitterHandles}%0A`}
            target="_blank"
            variant="primary"
            rel="noreferrer"
          >
            Tweet this article
          </Link>
          <Flex gap="32">
            <Link
              href={`https://twitter.com/search?q=${title}`}
              title={`https://twitter.com/search?q=${title}`}
              target="_blank"
              variant="primary"
              rel="noreferrer"
            >
              Discuss on Twitter
            </Link>
            <Link
              href={`https://github.com/tiagomichaelsousa/website/edit/main/data/${filepath}.mdx`}
              title={`https://github.com/tiagomichaelsousa/website/edit/main/data/${filepath}.mdx`}
              target="_blank"
              variant="primary"
              rel="noreferrer"
            >
              Edit on GitHub
            </Link>
          </Flex>
        </Flex>
        <Divider />
        {authors.map((author) => (
          <Flex gap="64" css={{ mt: '$64', '@mobile': { flexDirection: 'column', gap: '$16' } }} key={author.id} id={author.id}>
            <GatsbyImage image={getImage(author.avatar) as IGatsbyImageData} alt={author.name} title={author.name} />
            <Flex direction="column" css={{ width: '60%', '@mobile': { width: '100%' } }}>
              <Heading size="4" css={{ mb: '$16', '@mobile': { mb: '$32' } }}>
                Written by {author.name}
              </Heading>
              <Paragraph>{author.bio}</Paragraph>
              <Flex css={{ width: '60%', mb: '$32', mt: '$64', '@mobile': { justifyContent: 'center', width: '100%' } }} gap="32">
                <Link href={author.social.github.url} title={author.social.github.url} target="_blank" variant="contrast" rel="noreferrer">
                  <Svg>
                    <GitHubSvg />
                  </Svg>
                  <VisuallyHidden>GitHub</VisuallyHidden>
                </Link>

                <Link
                  href={author.social.twitter.url}
                  title={author.social.twitter.url}
                  target="_blank"
                  variant="contrast"
                  rel="noreferrer"
                >
                  <Svg>
                    <TwitterSvg />
                  </Svg>
                  <VisuallyHidden>Twitter</VisuallyHidden>
                </Link>

                <Link href={author.social.medium.url} title={author.social.medium.url} target="_blank" variant="contrast" rel="noreferrer">
                  <Svg>
                    <MediumSvg />
                  </Svg>
                  <VisuallyHidden>Medium</VisuallyHidden>
                </Link>

                <Link
                  href={author.social.linkedin.url}
                  title={author.social.linkedin.url}
                  target="_blank"
                  variant="contrast"
                  rel="noreferrer"
                >
                  <Svg>
                    <LinkedinSvg />
                  </Svg>
                  <VisuallyHidden>LinkedIn</VisuallyHidden>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArticleQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      timeToRead
      filepath: slug
      excerpt(pruneLength: 160)
      frontmatter {
        dateFormated: date(formatString: "dddd, DD MMMM YYYY")
        date
        title
        description
        categories
        slug
        authors {
          id
          name
          bio
          avatar {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          company {
            name
            role
            url
          }
          social {
            github {
              handle
              url
            }
            linkedin {
              handle
              url
            }
            medium {
              handle
              url
            }
            twitter {
              handle
              url
            }
          }
        }
      }
      wordCount {
        paragraphs
        sentences
        words
      }
    }
  }
`;

type ArticlePageProps = {
  body: string;
  timeToRead: number;
  excerpt: string;
  filepath: string;
  frontmatter: {
    slug: string;
    dateFormated: string;
    date: string;
    title: string;
    description: string;
    categories: string[];
    authors: Author[];
  };
  wordCount: {
    paragraphs: number;
    sentences: number;
    words: number;
  };
};

export default Article;
