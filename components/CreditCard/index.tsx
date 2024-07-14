import React from "react"
import Card from "./Card"
import PriceDisplay from "./PriceDisplay"
import LensKartSmall from "../../Images/lenskart_small.png"
import LensKartLarge from "../../Images/lenskart_large.png"

const CreditCard: React.FC = () => {
  return (
    <div className="max-w-[550px] rounded-3xl bg-[#c3e2ff] pb-3.5 pr-14 pt-9 max-md:pl-5 max-md:pr-5">
      <div className="flex gap-5 max-md:gap-0">
        <section className="flex w-[74%] flex-col max-md:ml-0 max-md:w-full">
          <Card imageSrc={LensKartSmall} textSrc={LensKartLarge} />
        </section>
        <section className="ml-5 flex w-[26%] flex-col max-md:ml-0 max-md:w-full">
          <PriceDisplay price="$261.00" cardCount={3} />
        </section>
      </div>
    </div>
  )
}

export default CreditCard
