import React from "react"

export interface CategoryItemProps {
  imageSrc: string
  title: string
  isHighlighted?: boolean
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageSrc, title }) => (
  <div className="flex flex-1 flex-col items-center">
    <img
      loading="lazy"
      src={imageSrc}
      alt={`${title} category`}
      className={`transition-border cursor-pointerhover:shadow-lg aspect-square h-[132px] w-[132px] rounded-full bg-neutral-100 transition-shadow hover:border hover:border-solid
       hover:border-sky-600`}
    />
    <div className="mt-6 text-center text-sm font-medium text-neutral-800">{title}</div>
  </div>
)

export default CategoryItem
