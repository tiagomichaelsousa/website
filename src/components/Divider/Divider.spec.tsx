import { render, waitFor } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';

    const { queryByTestId } = render(
      <Divider data-testid={testId}/>
    );
  
    await waitFor(() => {
      expect(queryByTestId(testId)).toBeInTheDocument();
    });
  });
});