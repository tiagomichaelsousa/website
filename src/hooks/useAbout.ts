import { About } from '@types/About';
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
                childSvg {
                  content {
                    data
                  }
                }
              }
            }
            right {
              description
              title
              icon {
                childSvg {
                  content {
                    data
                  }
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
