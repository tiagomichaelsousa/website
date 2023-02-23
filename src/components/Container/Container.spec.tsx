import { render, waitFor } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('should render correctly', async () => {
    const testId = 'test-id'
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Container>{testChild}</Container>
    );
  
    await waitFor(() => {
      expect(findByTestId(testId)).toBeDefined();
    });
  });
});