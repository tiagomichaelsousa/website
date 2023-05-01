import { render, waitFor } from "@testing-library/react";
import MdxComponents from "./MdxComponents";

describe('MdxComponents', () => {
  Object.keys(MdxComponents).forEach((key) => {
    it(`should render correctly - ${key}`, async () => {
      const Component = MdxComponents[key as keyof typeof MdxComponents];
      const testId = `${key}-test-id`;
      const props = {
        showlinenumbers: 'true',
        theme: 'yellow',
        dots: 'true',
        filename: 'test.tsx',
        copy: 'true',
        href: 'https://www.google.com',
      };

      const { getByTestId } = render(
        key === 'pre' ? 
        <Component data-testid={testId}>
          <code data-testid={testId} {...props}></code>
        </Component> :
        <Component data-testid={testId} /> 
      );

      await waitFor(() => {
        expect(getByTestId(testId)).toBeInTheDocument();
      })
    });
  });
});