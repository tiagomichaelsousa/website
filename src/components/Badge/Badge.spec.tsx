import { render, waitFor } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { queryByTestId } = render(
      <Badge>{testChild}</Badge>
    );
  
    await waitFor(() => {
      expect(queryByTestId(testId)).toBeInTheDocument();
    });
  });
});