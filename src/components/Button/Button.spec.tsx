import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', async () => {
    const buttonLabel = 'Test Text';

    const { findAllByText } = render(
      <Button>{buttonLabel}</Button>
    );

  
    expect(await findAllByText(buttonLabel)).toBeDefined();
  });

  describe('when the button is clicked', () => {
    it('should call the onClick function', () => {
      const onClick = jest.fn();
      const buttonLabel = 'Test Text';

      const { getByText } = render(<Button onClick={onClick}>{buttonLabel}</Button>);

      getByText(buttonLabel).click();

      expect(onClick).toHaveBeenCalled();
    });
  });
});