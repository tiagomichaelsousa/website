import { faker } from "@faker-js/faker";
import { render, waitFor } from "@testing-library/react";
import { GatsbyLink, Link } from "./Link";


describe('Link', () => {
  it('should render with the correct text', async () => {
    const href = faker.internet.url();
    const { getByText } = render(<Link href={href}>Link</Link>);

    await waitFor(() => {
      expect(getByText('Link')).toBeInTheDocument();
      expect(getByText('Link').getAttribute('href')).toEqual(href);
    })
  });
});

describe('GatsbyLink', () => {
  it('should render with the correct text', async () => {
    const to = faker.datatype.string();
    
    const { getByText } = render(
      <GatsbyLink to={to}>Link</GatsbyLink>
    );

    await waitFor(() => {
      expect(getByText('Link')).toBeInTheDocument();
      expect(getByText('Link').getAttribute('href')).toEqual(`/${to}`);
    })
  });
})