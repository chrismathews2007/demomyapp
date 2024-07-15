import React from "react";
import CategoryItem, { CategoryItemProps } from "./CategoryItem";
import CustomCarousel from "../Carousel/CustomCarousel";
import CategoryLogo from "@/Images/amazon_logo.png";
import { FiChevronRight } from "react-icons/fi";

const ShopFromTopCategories: React.FC = () => {
  const categories: CategoryItemProps[] = [
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
    {
      imageSrc: CategoryLogo,
      title: "Platform",
    },
  ];

  const slides = categories.map((category, index) => ({
    content: <CategoryItem key={index} {...category} />,
    hash: `slide${index}`,
  }));

  return (
    <section className="flex w-full flex-col">
      <header className="flex flex-wrap items-center justify-between px-5">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-sky-600">
          <span>Shop From</span>
          <span className="text-sky-600">Top Categories</span>
        </h2>
        <div className="flex cursor-pointer items-center gap-1.5 text-base font-medium text-neutral-800">
          <span>View All</span>
          <FiChevronRight />
        </div>
      </header>
      <div className="mx-5 my-7 mt-2 border-t-2 border-gray-200"></div>
      <CustomCarousel
        slides={slides}
        sliderHeight="auto"
        enableAutoplay={true}
        slidesPerView={{
          640: 2,
          768: 3,
          1024: 4,
          1200: 8,
        }}
        spaceBetween={{
          640: 10,
          768: 20,
          1024: 30,
          1200: 40,
        }}
      />
    </section>
  );
};

export default ShopFromTopCategories;
