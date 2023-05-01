import { useStaticQuery } from 'gatsby';
import { SiteMetadataFactory } from '@tests/factories/SiteMetadataFactory';
import useSiteMetadata from './useSiteMetadata';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}));

describe('useSiteMetadata', () => {
  it('should return the sitemetadata', () => {
    const siteMetadata = SiteMetadataFactory.make();;

    const data = {
      site: { siteMetadata },
    };

    (useStaticQuery as jest.Mock).mockImplementation(() => data);

    expect(useSiteMetadata()).toEqual(siteMetadata);
    expect(useStaticQuery).toBeCalledTimes(1);
  });
});