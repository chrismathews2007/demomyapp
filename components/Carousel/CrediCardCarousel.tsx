"use client"
import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules"

interface SlideData {
  content: React.ReactNode
  hash: string
}

interface CrediCardCarouselProps {
  slides: SlideData[]
  sliderHeight: string
  enablePagination?: boolean
  enableNavigation?: boolean
  enableHashNavigation?: boolean
}

const CrediCardCarousel: React.FC<CrediCardCarouselProps> = ({
  slides,
  sliderHeight,
  enablePagination,
  enableNavigation,
  enableHashNavigation,
}) => {
  const modules = []
  if (enablePagination) modules.push(Pagination)
  if (enableNavigation) modules.push(Navigation)
  if (enableHashNavigation) modules.push(HashNavigation)

  return (
    <div style={{ height: sliderHeight }}>
      <Swiper
        hashNavigation={enableHashNavigation ? { watchState: true } : undefined}
        pagination={enablePagination ? { clickable: true } : undefined}
        navigation={enableNavigation}
        modules={modules}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} data-hash={slide.hash} className={`slide${index + 1}`}>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CrediCardCarousel
