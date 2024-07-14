import React from "react";

interface ReusableDropdownProps {
  show: boolean;
  content: string[];
  positionClass?: string;
}

const ReusableDropdown: React.FC<ReusableDropdownProps> = ({ show, content, positionClass }) => {
  return show ? (
    <div className={`absolute ${positionClass} z-10 bg-white shadow-md`}>
      <ul className="text-black">
        {content.map((item, index) => (
          <li key={index} className="px-6 py-2 hover:bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default ReusableDropdown;
