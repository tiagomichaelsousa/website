import { Article } from '@types/Article';
import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = (): Article[] => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query LatestArticles {
      allMdx(filter: { slug: { regex: "/articles/" } }, sort: { order: DESC, fields: [frontmatter___date] }, limit: 4) {
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

  return edges.map(({ node }) => node).map(({ frontmatter }) => ({ slug: frontmatter.slug, ...frontmatter }));
};

export default useLatestArticles;
