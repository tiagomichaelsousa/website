import { Technology } from '@type/Technologies';
import { graphql, useStaticQuery } from 'gatsby';

const useTechnologies = (): Technology[] => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query TECHNOLOGIES {
      markdownRemark(frontmatter: { title: { eq: "technologies" } }) {
        frontmatter {
          technologies {
            name
            url
            color
            logo {
              svg {
                content
              }
            }
          }
        }
      }
    }
  `);

  return frontmatter.technologies;
};

export default useTechnologies;
