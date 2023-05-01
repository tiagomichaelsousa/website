import { faker } from "@faker-js/faker";
import { render, waitFor } from "@testing-library/react";
import { Pre } from "./Pre";
import copyToClipboard from 'copy-to-clipboard';

jest.mock('copy-to-clipboard', () => jest.fn());

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
      expect(queryByTestId('pre-block')).toBeInTheDocument();
    });
  });

  describe('when the copy button is clicked', () => {
    it('should copy the text to the clipboard', async () => {
      const content = '<h1>Hello World</h1>'
      const { getByTestId } = render(
        <Pre
          showLineNumbers={false}
          theme="pink"
          filename=""
          dots={false}
          copy
        >
          <code>{content}</code>
        </Pre>
      );

      expect(getByTestId('pre-block')).toBeInTheDocument();

      const button = getByTestId('copy-svg');
      expect(button).toBeInTheDocument();
      button.onclick = jest.fn();
      button.click();

      expect(button.onclick).toHaveBeenCalledTimes(1);
      expect(copyToClipboard).toHaveBeenCalledWith(content);
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