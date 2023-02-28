import { useStaticQuery } from 'gatsby';
import { TechnologyFactory } from '@tests/factories/TechnologyFactory';
import useTechnologies from './useTechnologies';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}));

describe('useTechnologies', () => {
  it('should return the technologies', () => {
    const technologies = TechnologyFactory.make();;

    const data = {
      markdownRemark: { 
        frontmatter: {
          technologies
        }
      },
    };

    (useStaticQuery as jest.Mock).mockImplementation(() => data);

    expect(useTechnologies()).toEqual(technologies);
    expect(useStaticQuery).toBeCalledTimes(1);
  });
});