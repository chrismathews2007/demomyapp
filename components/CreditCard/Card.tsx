import React from "react"
import Image, { StaticImageData } from "next/image"

type CardProps = {
  imageSrc: string | StaticImageData
  iconSrc?: string
  textSrc: string | StaticImageData
}

const Card: React.FC<CardProps> = ({ imageSrc, iconSrc, textSrc }) => (
  <article className="flex grow flex-col pb-5 pl-5 max-md:mt-10 max-md:max-w-full">
    <div className="w-full max-w-[106px]">
      <Image
        loading="lazy"
        src={imageSrc}
        alt="Card Image"
        layout="responsive"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <div className="w-full max-w-[300px] pt-14">
      <Image
        loading="lazy"
        src={textSrc}
        alt="Text Image"
        layout="responsive"
        objectFit="contain"
        className=" rounded-md "
      />
    </div>
  </article>
)

export default Card
