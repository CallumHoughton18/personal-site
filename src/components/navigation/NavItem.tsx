import React from "react";

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  return (
    <li className="nav-item">
      <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
        <span className="ml-2">{item.text}</span>
      </a>
    </li>
  );
};

export default NavItem;
