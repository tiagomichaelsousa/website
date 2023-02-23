import { render, waitFor } from '@testing-library/react';
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

    await waitFor(() => {
      expect(findByTestId('footer-container')).toBeDefined();
      expect(findByTitle(new RegExp(personalInfo.social.twitter.handle))).toBeDefined();
    })
  });
});