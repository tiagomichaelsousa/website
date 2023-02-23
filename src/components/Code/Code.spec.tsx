import { render } from '@testing-library/react';
import { Code } from './Code';

describe('Code', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Code>{testChild}</Code>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
  });
});