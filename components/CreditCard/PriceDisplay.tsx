import React from "react"

type PriceDisplayProps = {
  price: string
  cardCount: number
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, cardCount }) => (
  <aside className="mt-4 flex flex-col text-right max-md:mt-10">
    <div className="text-2xl font-bold text-neutral-600 ">{price}</div>
    <div className="mt-4 self-end text-lg text-black">{cardCount} Cards</div>
  </aside>
)

export default PriceDisplay
