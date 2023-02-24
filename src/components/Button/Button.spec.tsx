import { render, waitFor } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', async () => {
    const buttonLabel = 'Test Text';

    const { queryByText } = render(
      <Button>{buttonLabel}</Button>
    );

  
    await waitFor(() => {
      expect(queryByText(buttonLabel)).toBeInTheDocument();
    });
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