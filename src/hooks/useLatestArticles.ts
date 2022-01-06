import { Article } from '@types/Article';
import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = (): Article[] => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query LatestArticles {
      allMdx(
        filter: {slug: {regex: "/articles/"}}
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
        edges {
          node {
            slug
            frontmatter {
              categories
              date
              description
              title
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

  return edges
    .map(({ node }) => node)
    .map(({ frontmatter, slug }) => ({ slug, ...frontmatter }));
};

export default useLatestArticles;
