import { About } from '@type/About';
import { graphql, useStaticQuery } from 'gatsby';

const useAbout = (): About => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query ABOUT {
      markdownRemark(frontmatter: { title: { eq: "about" } }) {
        frontmatter {
          about {
            left {
              description
              title
              icon {
                svg {
                  content
                }
              }
            }
            right {
              description
              title
              icon {
                svg {
                  content
                }
              }
            }
          }
        }
      }
    }
  `);

  return frontmatter;
};

export default useAbout;
