import { render, waitFor } from "@testing-library/react";
import { ListItem } from "./ListItem";

describe('ListItem', () => {
  it('should render with the correct text', async () => {
    const { getByText } = render(<ListItem>Content</ListItem>);

    await waitFor(() => {
      expect(getByText('Content')).toBeInTheDocument();
    })
  });
});