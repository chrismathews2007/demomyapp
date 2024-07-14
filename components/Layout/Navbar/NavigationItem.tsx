"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReusableDropdown from "./ReusableDropdown";
import Text from "@/components/UI/Text";

interface NavigationItemProps {
  label: string;
  src: string;
  alt: string;
  className?: string;
  dropdownItems: string[];
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, src, alt, className = "", dropdownItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={`navigation-item ${className}`}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex items-center gap-2.5  py-4 text-white">
        <Text size="sm" weight="normal">
          {label}
        </Text>
        <IoIosArrowDown />
      </div>
      {showDropdown && <ReusableDropdown positionClass="top-15" show={showDropdown} content={dropdownItems} />}
    </div>
  );
};

export default NavigationItem;
