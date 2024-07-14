import * as React from "react";
import DropdownMenu from "./DropdownMenu";
import NavigationItem from "./NavigationItem";
import ContactInfo from "./ContactInfo";

interface DropdownContent {
  [key: string]: string[];
}

const NavBar: React.FC<{ dropdownContent: DropdownContent }> = ({ dropdownContent }) => (
  <nav className="mt-6 hidden w-full justify-between gap-5 bg-gray-800 px-12 text-white max-md:max-w-full max-md:flex-wrap max-md:px-5 lg:flex">
    <div className="relative flex items-center justify-between gap-5 text-xs max-md:max-w-full max-md:flex-wrap">
      <DropdownMenu />
      {Object.keys(dropdownContent).map((key) => (
        <NavigationItem
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          src={`path_to_${key}_icon.png`}
          alt={`${key.charAt(0).toUpperCase() + key.slice(1)} Icon`}
          className="text-black"
          dropdownItems={dropdownContent[key] || []}
        />
      ))}
    </div>
    <ContactInfo />
  </nav>
);

export default NavBar;
