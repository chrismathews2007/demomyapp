import React from "react";
import Image, { StaticImageData } from "next/image";

export interface CategoryItemProps {
  imageSrc: string | StaticImageData;
  title: string;
  isHighlighted?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <Image
        src={imageSrc}
        alt={`${title} category`}
        width={132}
        height={132}
        className={`transition-border aspect-square cursor-pointer rounded-full bg-neutral-100 transition-shadow hover:border hover:border-solid hover:border-sky-600 hover:shadow-lg`}
      />
      <div className="mt-6 text-center text-sm font-medium text-neutral-800">{title}</div>
    </div>
  );
};

export default CategoryItem;
