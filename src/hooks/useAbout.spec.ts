import { AboutFactory } from '@tests/factories/AboutFactory';
import useAbout from './useAbout';
import { useStaticQuery } from 'gatsby';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}));

describe('useAbout', () => {
  it('should return the about data', () => {
    const about = AboutFactory.make();

    const data = {
      markdownRemark: {
        frontmatter: about,
      },
    };

    (useStaticQuery as jest.Mock).mockImplementation(() => data);

    expect(useAbout()).toEqual(about);
    expect(useStaticQuery).toBeCalledTimes(1);
  });
});