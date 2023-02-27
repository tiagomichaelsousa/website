import { Article, GatsbyArticle } from '@type/Article';
import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = (): Article[] => {
  const {
    allMdx: { edges },
  } = useStaticQuery<GatsbyArticle>(graphql`
    query LatestArticles {
      allMdx(filter: { slug: { regex: "/articles/" } }, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              categories
              date
              description
              title
              slug
              image {
                childImageSharp {
                  gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
          }
        }
      }
    }
  `);

  return edges.map(({ node: { frontmatter } }): Article => frontmatter);
};

export default useLatestArticles;
