import { render } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Flex>{testChild}</Flex>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
  });
});