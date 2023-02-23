import { render } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';

    const { findByTestId } = render(
      <Divider data-testid={testId}/>
    );
  
    expect(await findByTestId(testId)).toBeDefined();
  });
});