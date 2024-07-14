"use client"
import React, { useRef } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Pagination, Navigation, HashNavigation } from "swiper/modules"

interface SlideData {
  content: React.ReactNode
  hash: string
}

interface CarouselTopCategoriesProps {
  slides: SlideData[]
  sliderHeight: string
  enablePagination?: boolean
  enableNavigation?: boolean
  enableHashNavigation?: boolean
  enableAutoplay?: boolean
  slidesPerView?: {
    [key: number]: number
  }
  spaceBetween?: {
    [key: number]: number
  }
}

const CarouselTopCategories: React.FC<CarouselTopCategoriesProps> = ({
  slides,
  sliderHeight,
  enablePagination,
  enableNavigation,
  enableHashNavigation,
  enableAutoplay,
  slidesPerView = {},
  spaceBetween = {},
}) => {
  const modules = []
  if (enablePagination) modules.push(Pagination)
  if (enableNavigation) modules.push(Navigation)
  if (enableHashNavigation) modules.push(HashNavigation)
  if (enableAutoplay) modules.push(Autoplay)

  const swiperRef = useRef<any>(null)

  const breakpoints = Object.keys(slidesPerView).reduce(
    (acc: { [key: number]: { slidesPerView: number; spaceBetween: number } }, key: string) => {
      const breakpoint = parseInt(key, 10)
      acc[breakpoint] = {
        slidesPerView: slidesPerView[breakpoint] || 1,
        spaceBetween: spaceBetween[breakpoint] || 0,
      }
      return acc
    },
    {} as { [key: number]: { slidesPerView: number; spaceBetween: number } }
  )

  return (
    <div style={{ height: sliderHeight }}>
      <Swiper
        ref={swiperRef}
        hashNavigation={enableHashNavigation ? { watchState: true } : undefined}
        pagination={enablePagination ? { clickable: true, el: ".custom-pagination" } : undefined}
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
          <SwiperSlide key={index} data-hash={slide.hash} className={`slide${index + 1}`}>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-navigation">
        <button onClick={() => swiperRef.current.swiper.slidePrev()} className="prev-button">
          Prev
        </button>
        <div className="custom-pagination"></div>
        <button onClick={() => swiperRef.current.swiper.slideNext()} className="next-button">
          Next
        </button>
      </div> */}
    </div>
  )
}

export default CarouselTopCategories
