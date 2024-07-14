import * as React from "react";
import Header from "./Header";
import LogoSearch from "./LogoSearch";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const MainNavbar: React.FC = () => {
  const dropdownContent = {
    wallet: ["Add Funds", "Withdraw", "History"],
    home: ["Main Page", "Updates", "Statistics"],
    evite: ["Create Event", "My Invitations", "Event Settings"],
    notice: ["Company News", "Updates", "Alerts"],
    profile: ["Edit Profile", "Account Settings", "Log Out"],
  };

  return (
    <div className="flex flex-col">
      <Header />
      <LogoSearch />
      <NavBar dropdownContent={dropdownContent} />
      <MobileNav dropdownContent={dropdownContent} />
    </div>
  );
};

export default MainNavbar;
