import { render, waitFor } from "@testing-library/react";
import { Text } from "./Text";

describe('Text', () => {
  it('should render correctly', async () => {
    const testId = 'text';
    const { queryByTestId } = render(<Text data-testid={testId} />);

    await waitFor(() => {
        expect(queryByTestId(testId)).toBeInTheDocument();
    });
  });
});