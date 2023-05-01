import React, { PropsWithChildren } from 'react';
import { Swiper, SwiperProps as SwiperCarouselProps } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);
import 'swiper/css';
import 'swiper/css/autoplay';
import { CSS, styled, VariantProps } from '@theme/stitches.config';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const SwiperCarousel = styled(Swiper, {
  transitionTimingFunction: 'linear',
  variants: {
    variant: {
      fade: {
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          zIndex: '999',
          width: '250px',
          top: '0',
          height: '100%',
          pointerEvents: 'none',
        },
        '&::before': {
          left: '0',
          background: 'linear-gradient(to right, $paper 0%, rgba(4, 7, 31, 0) 75%)',
        },
        '&::after': {
          right: '0',
          background: 'linear-gradient(to left, $paper 0%, rgba(4, 7, 31, 0) 75%)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'fade',
  },
});

export const Carousel: React.FC<PropsWithChildren<CarouselProps>> = ({ SwiperProps, children, ...props }) => {
  return (
    <SwiperCarousel
      centeredSlides
      slidesPerView={5}
      spaceBetween={90}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      {...SwiperProps}
      {...props}
    >
      {children}
    </SwiperCarousel>
  );
};

type CarouselVariants = VariantProps<typeof SwiperCarousel> & { css?: CSS };
interface CarouselProps extends CarouselVariants {
  SwiperProps?: SwiperCarouselProps;
}
