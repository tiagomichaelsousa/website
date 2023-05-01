import { render, waitFor } from "@testing-library/react";
import { List } from "./List";

describe('List', () => {
  it('should render with the correct text', async () => {
    const { getByText } = render(<List>Content</List>);

    await waitFor(() => {
      expect(getByText('Content')).toBeInTheDocument();
    })
  });
});