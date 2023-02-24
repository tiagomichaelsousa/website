import { render, waitFor } from "@testing-library/react";
import { GatsyImageFactory } from "@tests/factories/GatsbyImageFactory";
import { StaticImage, GatsbyImage, Img } from "./Image";

describe('StaticImage', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testAlt = 'test-alt';
    const src = 'test-src';

    const { queryByTestId } = render(
      <StaticImage
        data-testid={testId}
        alt={testAlt}
        src={src}
      />
    );

    await waitFor(() => {
      const image = queryByTestId(testId);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', testAlt);
      expect(image).toHaveAttribute('src', src);
    });
  });
});

describe('GatsbyImage', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testAlt = 'test-alt';
    const gatsyImage = GatsyImageFactory.make();

    const { queryByTestId } = render(
      <GatsbyImage
        data-testid={testId}
        alt={testAlt}
        image={gatsyImage}
      />
    );

    await waitFor(() => {
      const image = queryByTestId(testId);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', testAlt);
      expect(image).toHaveAttribute('image');
    });
  });
});

describe('Img', () => {
  it('should render correctly', async () => {
    const testId = 'test-id';
    const testAlt = 'test-alt';
    const src = 'test-src';

    const { queryByTestId } = render(
      <Img 
        data-testid={testId}
        src={src}
        alt={testAlt}
      />
    )
    await waitFor(() => {
      const image = queryByTestId(testId);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', testAlt);
      expect(image).toHaveAttribute('src', src);
    });

  });
});