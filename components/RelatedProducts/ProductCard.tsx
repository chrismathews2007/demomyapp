import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

type ProductCardProps = {
  isNew?: boolean;
  discount?: number;
  imageSrc: string;
  name: string;
  price: string;
  originalPrice?: string;
  outOfStock?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  isNew,
  discount,
  imageSrc,
  name,
  price,
  originalPrice,
  outOfStock,
}) => (
  <article className="flex flex-col items-center max-md:mt-5">
    <div className="flex w-full flex-col items-center bg-zinc-100 px-4 py-4">
      <div className="flex w-full justify-between gap-5">
        {isNew && <span className="h-7 rounded bg-green-600 px-5 py-1.5 text-xs font-medium text-white">NEW</span>}
        {discount && (
          <div className="flex h-[68px] w-[68px] flex-col rounded bg-green-700 px-2 py-3.5 text-center font-bold text-white">
            <span className="text-md">{discount}%</span>
            <span className="text-sm">OFF</span>
          </div>
        )}
        <div className="flex items-start gap-0.5">
          <div className="flex flex-col items-center rounded-full border border-slate-300  p-4">
            <FaHeart color="red" />
          </div>
        </div>
      </div>
      <img loading="lazy" src={imageSrc} alt={name} className="mt-16 aspect-[4.76] w-[254px] max-md:mt-10" />
      {!outOfStock ? (
        <button className="mt-16 flex gap-2 bg-white px-11 py-4 text-xs font-medium text-neutral-500 max-md:mt-10 max-md:px-5">
          <IoCartOutline />

          <span className="my-auto">Add to cart</span>
        </button>
      ) : (
        <span className="mt-16 flex gap-1.5 bg-white px-10 py-4 text-xs font-medium text-red-600 max-md:mt-10 max-md:px-5">
          <IoCartOutline className="text-red-600" />
          Out of Stock
        </span>
      )}
    </div>
    <h3 className="mt-7 text-sm text-zinc-900">{name}</h3>
    <div className="mt-3.5 flex gap-5 text-xs font-semibold">
      <span className="text-zinc-900">{price}</span>
      {originalPrice && <span className="text-zinc-300 line-through">{originalPrice}</span>}
    </div>
  </article>
);

export default ProductCard;
