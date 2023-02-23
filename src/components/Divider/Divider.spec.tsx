import { render, waitFor } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';

    const { findByTestId } = render(
      <Divider data-testid={testId}/>
    );
  
    await waitFor(() => {
      expect(findByTestId(testId)).toBeDefined();
    });
  });
});