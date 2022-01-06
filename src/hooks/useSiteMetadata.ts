import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from '@types/SiteMetadata';

const useSiteMetadata = (): SiteMetadata => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
      query SiteMetadata {
          site {
              siteMetadata {
                  title
                  description
                  siteUrl
              }
          }
      }
  `);

  return siteMetadata;
};

export default useSiteMetadata;
