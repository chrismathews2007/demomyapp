import CustomCarousel from "components/Carousel/CustomCarousel";
import React from "react";
import ProductCard from "./ProductCard";
import ProdutImage from "@/Images/bata.png";

type PriceFilterProps = {
  price: string;
  isActive: boolean;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ price, isActive }) => (
  <div className="flex flex-1 flex-col justify-center">
    <div className="flex flex-col justify-center">
      <div
        className={`items-center justify-center rounded-md px-16 py-4 ${
          isActive ? "bg-lime-400 text-white" : "bg-zinc-100 text-zinc-400"
        } max-md:px-5`}
      >
        {price}
      </div>
    </div>
  </div>
);

const RelatedProducts: React.FC = () => {
  const productList = [
    {
      isNew: true,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$800.22",
      originalPrice: "$1000.66",
    },
    {
      discount: 20,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$400.00",
    },
    {
      discount: 20,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$700.00",
    },
    {
      discount: 20,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$800.00",
      outOfStock: true,
    },
    {
      isNew: true,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$800.22",
      originalPrice: "$1000.66",
    },
    {
      discount: 20,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$400.00",
    },
    {
      discount: 20,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$700.00",
    },
    {
      discount: 20,
      imageSrc: ProdutImage.src,
      name: "Bata Card",
      price: "$800.00",
      outOfStock: true,
    },
  ];

  const slides = productList.map((product, index) => ({
    content: <ProductCard key={index} {...product} />,
    hash: `slide${index}`,
  }));

  const priceFilters = ["All", "$25", "$50", "$75", "$100", "$125"];

  return (
    <main className="flex flex-col">
      <h2 className="mb-6 w-full text-3xl text-zinc-900 max-md:max-w-full">Related Product</h2>
      <CustomCarousel
        slides={slides}
        sliderHeight="auto"
        slidesPerView={{
          640: 2,
          768: 3,
          1024: 4,
          1200: 4,
        }}
        spaceBetween={{
          640: 20,
          768: 30,
          1024: 40,
          1200: 40,
        }}
        enablePagination
      />
      <button className="mt-28 w-full max-w-[973px] items-center justify-center self-center rounded bg-sky-50 px-16 py-3.5 text-center text-xl text-black max-md:mt-10 max-md:max-w-full max-md:px-5">
        View All
      </button>
      <nav className="mt-12 flex w-full gap-2 whitespace-nowrap text-center text-2xl text-zinc-400 max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
        {priceFilters.map((price, index) => (
          <PriceFilter key={index} price={price} isActive={index === 0} />
        ))}
      </nav>
    </main>
  );
};

export default RelatedProducts;
