import { render, waitFor } from '@testing-library/react';
import { Heading } from './Heading';
import copyToClipboard from 'copy-to-clipboard';

describe('Heading', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testChild = <div data-testid={testId}>Test child</div>;

    const { queryByTestId } = render(
      <Heading>{testChild}</Heading>
    );

    await waitFor(() => {
      expect(queryByTestId(testId)).toBeInTheDocument();
    });
  });

  describe('when anchor is true', () => {
    it('should render correctly', async () => {
      const testId = 'test-id';
      const testChild = <div data-testid={testId}>Test child</div>;
  
      const { queryByTestId } = render(
        <Heading anchor>{testChild}</Heading>
      );
    
      await waitFor(() => {
        expect(queryByTestId(testId)).toBeInTheDocument();

        const button = queryByTestId('copy-link');
        expect(button).toBeInTheDocument();

        button?.click();

        expect(copyToClipboard).toHaveBeenCalledWith(
          `${window.location.origin}${window.location.pathname}#${testChild}`
        );
      });
    });
  });
});