import React from "react"
import { RiCustomerServiceFill } from "react-icons/ri"

const ContactInfo: React.FC = () => {
  return (
    <div className="flex justify-between gap-5 uppercase">
      <div className="h-[57px] w-0.5 shrink-0 border-2 border-solid border-zinc-100 bg-zinc-100" />
      <div className="my-auto flex items-center justify-between gap-5">
        <RiCustomerServiceFill className="text-red-500" size={25} />
        <div className="flex flex-col self-start">
          <div className="text-sm font-light">Contact Us 24/7</div>
          <div className="mt-1.5 text-xs font-medium">
            <a href="tel:+12012987481" className="hover:text-red-600">
              +1 (201) 298-7481
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
