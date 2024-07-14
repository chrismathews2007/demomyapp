"use client"

import React, { useState } from "react"
import { IoMdMenu, IoIosArrowDown } from "react-icons/io"
import ReusableDropdown from "./ReusableDropdown"

export default function DropdownMenu() {
  const [showDropdown, setShowDropdown] = useState(false)
  const content = ["Category 1", "Category 2", "Category 3", "More Categories"]

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex items-center gap-5 self-stretch bg-red-600 px-9 py-4 text-base font-medium">
        <IoMdMenu />
        <div className="my-auto flex-auto">All Categories</div>
        <IoIosArrowDown />
      </div>
      {showDropdown && <ReusableDropdown show={showDropdown} content={content} positionClass="left-0 w-full" />}
    </div>
  )
}
