import useHasScrolled from "@/hooks/useHasScrolled";
import React from "react";
import NavBar from "./navigation/NavBar";

const Header = (): JSX.Element => {
  const hasScrolled = useHasScrolled(50);
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
    <NavBar
      title="{ Callums.Site }"
      navItems={navItems}
      titleStyle="text-white tracking-wide uppercase text-sm font-bold"
      navItemsStyle="tracking-wide"
      className={`rounded-b-sm transition-colors duration-75 ease-linear ${
        hasScrolled ? "bg-nordBg shadow-md" : "bg-transparent"
      }`}
    ></NavBar>
  );
};

export default Header;
