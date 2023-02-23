import { render, waitFor } from '@testing-library/react';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  it('should render correctly', async () => {
    const testChildId = "test-swiper-slide"

    const { findByTestId } = render(
    <Carousel>
      <div data-testid={testChildId}/>
    </Carousel>
  );
  
  await waitFor(() => {
    expect(findByTestId(testChildId)).toBeDefined();
  });
  });
});