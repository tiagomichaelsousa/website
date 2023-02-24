import { faker } from "@faker-js/faker";
import { render, waitFor } from "@testing-library/react";
import { Pre } from "./Pre";


describe('Pre', () => {
  it('should render with the correct text', async () => {
    const { queryByTestId } = render(
      <Pre
        showLineNumbers={false}
        theme="pink"
        filename="test"
        dots={false}
        copy={false}
      >
        <code>Content</code>
      </Pre>
    );

    await waitFor(() => {
      const preBlock = queryByTestId('pre-block');
      expect(preBlock).toBeInTheDocument();
    });
  });

  describe('when the copy button is clicked', () => {
    it('should copy the text to the clipboard', async () => {
      const { getByTestId } = render(
        <Pre
          showLineNumbers={false}
          theme="pink"
          filename=""
          dots={false}
          copy
        >
          <code>Content</code>
        </Pre>
      );

      const preBlock = getByTestId('pre-block');
      expect(preBlock).toBeInTheDocument();

      const button = getByTestId('copy-svg');
      expect(button).toBeInTheDocument();
      button.onclick = jest.fn();
  
      button.click();
      
      expect(button.onclick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the dots are enabled', () => {
    it('should render the dots', async () => {
      const { queryByTestId } = render(
        <Pre
          showLineNumbers={false}
          theme="pink"
          filename=""
          dots
          copy={false}
        >
          <code>Content</code>
        </Pre>
      );

      await waitFor(() => {
        expect(queryByTestId('dots')).toBeInTheDocument();
        expect(queryByTestId('dot-red')).toBeInTheDocument();
        expect(queryByTestId('dot-yellow')).toBeInTheDocument();
        expect(queryByTestId('dot-green')).toBeInTheDocument();
      });
    });
  });

  describe('when the filename are enabled', () => {
    it('should render the filename', async () => {
      const fileName = faker.datatype.string();

      const { queryByText } = render(
        <Pre
          showLineNumbers={false}
          theme="pink"
          filename={fileName}
          dots={false}
          copy={false}
        >
          <code>Content</code>
        </Pre>
      );

      await waitFor(() => {
        expect(queryByText(fileName)).toBeInTheDocument();
      });
    });
  });
});