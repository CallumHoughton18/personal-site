import React from "react";
import NavItem from "./NavItem";

const NavBar = (props: NavBarProps): JSX.Element => {
  const navListItems = props.navItems.map((navItem, indx) => {
    return <NavItem item={navItem} key={`${navItem.text}${indx}`}></NavItem>;
  });
  return (
    <nav
      className={`flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent mb-3 ${props.className}`}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white tracking-wide">
            {props.title}
          </a>
        </div>
        <div
          className="lg:flex flex-grow items-center flex"
          id="example-navbar-danger"
        >
          <ul className="flex flex-row list-none lg:ml-auto tracking-wide">
            {navListItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
