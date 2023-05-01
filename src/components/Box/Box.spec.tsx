import { render, waitFor } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { queryByTestId } = render(
      <Box>{testChild}</Box>
    );
  
    await waitFor(() => {
      expect(queryByTestId(testId)).toBeInTheDocument();
    });
  });
});