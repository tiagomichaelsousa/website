import { PersonalInfo } from '@type/PersonalInfo';
import { graphql, useStaticQuery } from 'gatsby';

const usePersonalInfo = (): PersonalInfo => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query PERSONAL_INFO {
      markdownRemark(frontmatter: { title: { eq: "personal-info" } }) {
        frontmatter {
          title
          name
          avatar {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          social {
            github {
              url
              handle
            }
            linkedin {
              url
              handle
            }
            twitter {
              url
              handle
            }
            medium {
              url
              handle
            }
          }
          company {
            name
            url
            logo {
              childImageSharp {
                gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  `);

  return frontmatter;
};

export default usePersonalInfo;
