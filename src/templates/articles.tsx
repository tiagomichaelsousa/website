import React from 'react';
import Layout from 'components/Layout/Layout';
import { Link, graphql, PageProps } from 'gatsby';
import { Container, Pagination } from '@components';
import { PaginationType } from 'components/Pagination/Pagination';
import { Author } from '@types/Author';

const ArticlesList = ({
  data: {
    allMdx: { edges: posts },
  },
  pageContext,
}: PageProps<{ allMdx: { edges: ArticlePageProps[] }; pageContext: PaginationType }>) => {
  return (
    <Layout page="Articles">
      <Container>
        {posts.map(({ node: { frontmatter, excerpt } }) => {
          return (
            <article key={frontmatter.slug}>
              <header>
                <h3>
                  <Link to={`/${frontmatter.slug}`}> {frontmatter.title} </Link>
                </h3>
                <small>{frontmatter.date}</small>
              </header>
              <section>
                <p dangerouslySetInnerHTML={{ __html: excerpt }} />
              </section>
            </article>
          );
        })}

        <Pagination pageContext={pageContext} />
      </Container>
    </Layout>
  );
};

export const ArticlesListQuery = graphql`
  query ArticlesListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 160)
          frontmatter {
            dateFormated: date(formatString: "dddd, DD MMMM YYYY")
            date
            title
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
    }
  }
`;

type ArticlePageProps = {
  node: {
    timeToRead: number;
    excerpt: string;
    filepath: string;
    frontmatter: {
      slug: string;
      dateFormated: string;
      date: string;
      title: string;
      categories: string[];
      authors: Author[];
    };
    wordCount: {
      paragraphs: number;
      sentences: number;
      words: number;
    };
  };
};

export default ArticlesList;
