import { render, waitFor } from '@testing-library/react';
import { Code } from './Code';

describe('Code', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { queryByTestId } = render(
      <Code>{testChild}</Code>
    );
  
    await waitFor(() => {
      expect(queryByTestId(testId)).toBeInTheDocument();
    });
  });
});