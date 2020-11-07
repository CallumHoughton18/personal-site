import React from "react";
import NavBar from "./navigation/NavBar";

const Header = (): JSX.Element => {
  const navItems: NavItem[] = [
    {
      text: "blog",
    },
    {
      text: "portfolio",
    },
  ];
  return <NavBar title="{ Callums.Site }" navItems={navItems}></NavBar>;
};

export default Header;
