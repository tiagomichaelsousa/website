import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testChild = <div data-testid={testId}>Test child</div>;

    const { findByTestId } = render(
      <Heading>{testChild}</Heading>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
    
  });

  describe('when anchor is true', () => {
    it('should render correctly', async () => {
      const testId = 'test-id';
      const testChild = <div data-testid={testId}>Test child</div>;
  
      const { findByTestId } = render(
        <Heading anchor>{testChild}</Heading>
      );
    
      expect(await findByTestId(testId)).toBeDefined();
    });
  });
});