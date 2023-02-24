import { render, waitFor } from '@testing-library/react';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  it('should render correctly', async () => {
    const testChildId = "test-swiper-slide"

    const { queryByTestId } = render(
    <Carousel>
      <div data-testid={testChildId}/>
    </Carousel>
  );
  
  await waitFor(() => {
    expect(queryByTestId(testChildId)).toBeInTheDocument();
  });
  });
});