import React from "react";
import NavBar from "./navigation/NavBar";

const Header = (): JSX.Element => {
  const navItems: NavItem[] = [
    {
      text: "home",
    },
    {
      text: "blog",
    },
    {
      text: "photography",
    },
  ];
  return (
    <NavBar title="{ Callums.Site }" navItems={navItems} className=""></NavBar>
  );
};

export default Header;
