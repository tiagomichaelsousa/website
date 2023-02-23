import { render, waitFor } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Flex>{testChild}</Flex>
    );
    
    await waitFor(() => {
      expect(findByTestId(testId)).toBeDefined();
    });
  });
});