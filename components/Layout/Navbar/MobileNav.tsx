import * as React from "react";
import { IoIosWallet, IoIosHome, IoIosCalendar, IoIosNotifications, IoIosPerson } from "react-icons/io";

interface DropdownContent {
  [key: string]: string[];
}

const getIcon = (key: string) => {
  switch (key) {
    case "wallet":
      return <IoIosWallet className="size-6" />;
    case "home":
      return <IoIosHome className="size-6" />;
    case "evite":
      return <IoIosCalendar className="size-6" />;
    case "notice":
      return <IoIosNotifications className="size-6" />;
    case "profile":
      return <IoIosPerson className="size-6" />;
    default:
      return null;
  }
};

const MobileNav: React.FC<{ dropdownContent: DropdownContent }> = ({ dropdownContent }) => (
  <nav className="fixed inset-x-0 bottom-0 flex justify-around bg-gray-800 p-4 text-white lg:hidden">
    {Object.keys(dropdownContent).map((key) => (
      <div key={key} className="flex flex-col items-center">
        {getIcon(key)}
        <span className="text-xs">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
      </div>
    ))}
  </nav>
);

export default MobileNav;
