import React from "react";

const NavBar = (props: NavBarProps): JSX.Element => {
  return (
    <nav
      className={`flex flex-wrap items-center justify-between px-2 py-2 mb-3 ${props.className}`}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="max-h-0 max-w-0 sm:max-w-full sm:max-h-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
          <a
            className={`leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap ${props.titleStyle} invisible sm:visible`}
          >
            {props.title}
          </a>
        </div>
        <div className="flex flex-grow items-center">
          <ul
            className={`flex flex-grow sm:flex-grow-0 flex-row sm:ml-auto justify-center items-center list-none ${props.navItemsStyle}`}
          >
            {props.navItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
