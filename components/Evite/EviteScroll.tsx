"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

function EviteScroll() {
  const categories: string[] = [
    "Baby Boy",
    "Baby Girl",
    "Men",
    "Women",
    "Adult",
    "For Her",
    "For Him",
    "Brother",
    "Sister",
    "Wife",
    "Daughter",
  ]

  const ages: string[] = ["Age 0 - 10", "Age 10 - 20", "Age 20 - 30", "Age 40 - 50", "Age 60 - 70", "Age 80 - 90"]

  const occasions: string[] = [
    "Anniversary",
    "Birthday",
    "Friendship",
    "Just Because",
    "Mother’s Day",
    "Women’s Day",
    "Thanksgiving",
  ]

  // Ensure the arrays are not empty before accessing their first elements
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || "Baby Boy")
  const [selectedAge, setSelectedAge] = useState<string>(ages[1] || "Age 0 - 10")
  const [selectedOccasion, setSelectedOccasion] = useState<string>(occasions[1] || "Anniversary")

  return (
    <div className="flex flex-col text-2xl font-normal text-zinc-500">
      <div className="py-2 pl-4 max-md:pl-3">
        <Swiper spaceBetween={30} slidesPerView="auto" pagination={{ clickable: true }} className="mySwiper">
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="!w-auto py-2">
              <div
                className={`flex cursor-pointer flex-col justify-center rounded-full px-6 py-1 shadow-md max-md:px-5 ${
                  selectedCategory === category ? "bg-green-700 text-white" : "bg-white"
                } font-normal`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="justify-center whitespace-nowrap">{category}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-0 px-4 py-2 max-md:px-3">
        <Swiper spaceBetween={30} slidesPerView="auto" pagination={{ clickable: true }} className="mySwiper">
          {ages.map((age, index) => (
            <SwiperSlide key={index} className="!w-auto py-2">
              <div
                className={`flex cursor-pointer flex-col justify-center rounded-full px-6 py-1 shadow-md max-md:px-5 ${
                  selectedAge === age ? "bg-green-700 text-white" : "bg-white"
                } font-normal`}
                onClick={() => setSelectedAge(age)}
              >
                <div className="justify-center whitespace-nowrap">{age}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-0 py-2 pl-4 pr-3 max-md:pl-3">
        <Swiper spaceBetween={30} slidesPerView="auto" pagination={{ clickable: true }} className="mySwiper">
          {occasions.map((occasion, index) => (
            <SwiperSlide key={index} className="!w-auto py-2">
              <div
                className={`flex cursor-pointer flex-col justify-center rounded-full px-6 py-1 shadow-md max-md:px-5 ${
                  selectedOccasion === occasion ? "bg-green-700 text-white" : "bg-white"
                } font-normal`}
                onClick={() => setSelectedOccasion(occasion)}
              >
                <div className="justify-center whitespace-nowrap">{occasion}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default EviteScroll
