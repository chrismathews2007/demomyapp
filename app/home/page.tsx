import * as React from "react";
import { FaFilter } from "react-icons/fa";
import {
  IoIosCalendar,
  IoIosHeartEmpty,
  IoIosHome,
  IoIosNotifications,
  IoIosPerson,
  IoIosSearch,
  IoIosWallet,
} from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import CustomImage from "components/UI/Image/CustomImage";
import ContactInfo from "components/Layout/Navbar/ContactInfo";
import DropdownMenu from "components/Layout/Navbar/DropdownMenu";
import LanguageOption from "components/Layout/Navbar/LanguageOption";
import NavigationItem from "components/Layout/Navbar/NavigationItem";

import Logo from "../../Images/logo.png";

interface DropdownContent {
  [key: string]: string[];
}

const App: React.FC = () => {
  const dropdownContent: DropdownContent = {
    wallet: ["Add Funds", "Withdraw", "History"],
    home: ["Main Page", "Updates", "Statistics"],
    evite: ["Create Event", "My Invitations", "Event Settings"],
    notice: ["Company News", "Updates", "Alerts"],
    profile: ["Edit Profile", "Account Settings", "Log Out"],
  };

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

  return <div className="flex flex-col"></div>;
};

export default App;
