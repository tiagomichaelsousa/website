import { render, waitFor } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe('Paragraph', () => {
  it('should render with the correct text', async () => {
    const { queryByText } = render(
      <Paragraph>Content</Paragraph>
    );

    await waitFor(() => {
      expect(queryByText('Content')).toBeInTheDocument();
    })
  });
});