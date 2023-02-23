import { render } from '@testing-library/react';
import { PersonalInfoFactory } from '@tests/factories/PersonalInfoFactory';
import Footer from './Footer';


const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
})

describe('Footer', () => {
  it('should render correctly', async () => {

    const { findByTestId, findByTitle } = render(
      <Footer />
    );

    expect(await findByTestId('footer-container')).toBeDefined();
    expect(await findByTitle(new RegExp(personalInfo.social.twitter.handle))).toBeDefined();
  });
});