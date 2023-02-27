import { render, waitFor } from "@testing-library/react";
import { Svg } from "./Svg";

describe('Svg', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(<Svg data-testid="svg" color="primary" size="32" />);

    await waitFor(() => {
        expect(queryByTestId('svg')).toBeInTheDocument();
    });
  });
});