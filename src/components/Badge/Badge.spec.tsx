import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Badge>{testChild}</Badge>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
  });
});