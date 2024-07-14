import Image from "next/image"
import React from "react"
import { StaticImageData } from "next/image"

type ImageSize = "tiny" | "small" | "medium" | "large" | "fullWidth"

// Mapping from size prop to TailwindCSS classes
const sizeClasses = {
  tiny: "w-[204px] h-[65px]",
  small: "w-24 h-24",
  medium: "w-48 h-48",
  large: "w-96 h-96",
  fullWidth: "w-[100%] h-[30rem]",
}

interface ImageProps {
  src: string | StaticImageData
  alt: string
  size: ImageSize
  className?: string
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, size, className }) => {
  const combinedClassName = `${sizeClasses[size]} ${className || ""}`.trim()

  return (
    <div className={combinedClassName} style={{ position: "relative" }}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  )
}

export default CustomImage
