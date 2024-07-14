"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface SlideData {
  content: React.ReactNode;
  hash: string;
}

interface CustomCarouselProps {
  slides: SlideData[];
  sliderHeight: string;
  enablePagination?: boolean;
  enableNavigation?: boolean;
  enableAutoplay?: boolean;
  slidesPerView?: {
    [key: number]: number;
  };
  spaceBetween?: {
    [key: number]: number;
  };
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  slides,
  sliderHeight,
  enablePagination,
  enableNavigation,
  enableAutoplay,
  slidesPerView = {},
  spaceBetween = {},
}) => {
  const modules = [];
  if (enablePagination) modules.push(Pagination);
  if (enableNavigation) modules.push(Navigation);
  if (enableAutoplay) modules.push(Autoplay);

  const swiperRef = useRef<any>(null);

  const breakpoints = Object.keys(slidesPerView).reduce(
    (acc: { [key: number]: { slidesPerView: number; spaceBetween: number } }, key: string) => {
      const breakpoint = parseInt(key, 10);
      acc[breakpoint] = {
        slidesPerView: slidesPerView[breakpoint] || 1,
        spaceBetween: spaceBetween[breakpoint] || 0,
      };
      return acc;
    },
    {} as { [key: number]: { slidesPerView: number; spaceBetween: number } }
  );

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div style={{ height: sliderHeight }}>
      <Swiper
        ref={swiperRef}
        pagination={enablePagination ? { clickable: true } : undefined}
        navigation={enableNavigation}
        autoplay={
          enableAutoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : undefined
        }
        modules={modules}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={`slide${index + 1}`}>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-navigation">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div> */}
    </div>
  );
};

export default CustomCarousel;
