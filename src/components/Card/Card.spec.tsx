import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Card>{testChild}</Card>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
  });
});