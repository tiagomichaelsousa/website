import { render, waitFor } from '@testing-library/react';
import { PersonalInfoFactory } from '@tests/factories/PersonalInfoFactory';
import Footer from './Footer';


const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
})

describe('Footer', () => {
  it('should render correctly', async () => {

    const { queryByTestId, queryByTitle } = render(
      <Footer />
    );

    await waitFor(() => {
      expect(queryByTestId('footer-container')).toBeInTheDocument();
      expect(queryByTitle(new RegExp(personalInfo.social.twitter.handle))).toBeInTheDocument();
      expect(queryByTitle('memoji12')).toBeInTheDocument();
      expect(queryByTitle('footer')).toBeInTheDocument();
    })
  });

  describe('when the twitter button is clicked', () => {
    it('should open a new tab with the correct url', () => {
      const { getByTitle } = render(<Footer />);

      const twitterButton = getByTitle(new RegExp(personalInfo.social.twitter.handle));
      const twitterUrl = `https://twitter.com/intent/tweet?text=Hey%20${personalInfo.social.twitter.handle}`;

      const handleClick = jest.fn();
      twitterButton.onclick = handleClick;

      twitterButton.click();

      expect(twitterButton.getAttribute('href')).toEqual(twitterUrl);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});