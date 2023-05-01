import { useStaticQuery } from 'gatsby';
import usePersonalInfo from './usePersonalInfo';
import { PersonalInfoFactory } from '@tests/factories/PersonalInfoFactory';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}));

describe('usePersonalInfo', () => {
  it('should return the personalinfo data', () => {
    const personalInfo = PersonalInfoFactory.make();;

    const data = {
      markdownRemark: {
        frontmatter: personalInfo,
      },
    };

    (useStaticQuery as jest.Mock).mockImplementation(() => data);

    expect(usePersonalInfo()).toEqual(personalInfo);
    expect(useStaticQuery).toBeCalledTimes(1);
  });
});