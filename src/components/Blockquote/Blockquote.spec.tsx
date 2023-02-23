import { render } from '@testing-library/react';
import { Blockquote } from './Blockquote';

describe('Blockquote', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Blockquote>{testChild}</Blockquote>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
  });
});