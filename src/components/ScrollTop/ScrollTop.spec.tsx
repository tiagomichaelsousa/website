import { fireEvent, render, waitFor } from "@testing-library/react";
import ScrollTop from "./ScrollTop";

describe('ScrollTop', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(<ScrollTop />);

    await waitFor(() => {
      expect(queryByTestId('scrolltop-svg')).toBeInTheDocument();
    });
  });

  describe('when the user clicks the scroll top button', () => {
    it('should scroll to the top of the page', async () => {
      const mockScrollTo = jest.fn().mockImplementationOnce(() => {
        window.scrollY = 0;
      });

      window.scrollTo = mockScrollTo;

      const { queryByTestId } = render(<ScrollTop />);

      await waitFor(() => {
        expect(queryByTestId('scrolltop-svg')).toBeInTheDocument();
      
        const scrollTopButton = queryByTestId('scroll-top-button');

        expect(scrollTopButton).toBeInTheDocument();

        if(!scrollTopButton) {
          throw new Error('Scroll top button not found');
        }

        fireEvent.click(scrollTopButton);
  
        expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
        expect(window.scrollY).toBe(0);
      });
    });
  });
});