import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testChild = <div data-testid={testId}>Test child</div>;

    const { queryByTestId } = render(
      <Heading>{testChild}</Heading>
    );
  
    expect(await queryByTestId(testId)).toBeInTheDocument();
    
  });

  describe('when anchor is true', () => {
    it('should render correctly', async () => {
      const testId = 'test-id';
      const testChild = <div data-testid={testId}>Test child</div>;
  
      const { queryByTestId } = render(
        <Heading anchor>{testChild}</Heading>
      );
    
      expect(await queryByTestId(testId)).toBeInTheDocument();
    });
  });
});