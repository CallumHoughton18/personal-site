import useHasScrolled from "@/hooks/useHasScrolled";
import useNavLinksQuery from "@/hooks/useNavLinksQuery";
import { Link } from "gatsby";
import React from "react";
import NavBar from "./navigation/NavBar";

const Header = (): JSX.Element => {
  const hasScrolled = useHasScrolled(50);
  const siteMetaData = useNavLinksQuery();
  siteMetaData.site.siteMetadata.menuLinks[0];
  const navItems = siteMetaData.site.siteMetadata.menuLinks.map(
    (link, indx) => {
      const navLinkJsx = (
        <li
          key={`${link.name}-${indx}`}
          className=" text-sm text-snowStorm-lightest uppercase tracking-wide font-bold py-2 ml-5 mr-5
          hover:text-gray-300 focus:text-blueGray-300 active:text-blueGray-300 select-none"
        >
          <Link to={link.link} className="">
            {link.name}
          </Link>
        </li>
      );
      return navLinkJsx;
    },
  );

  return (
    <NavBar
      title="{ Callums.Site }"
      navItems={navItems}
      titleStyle="text-snowStorm-lightest tracking-wide uppercase text font-bold"
      navItemsStyle=""
      className={`rounded-b-sm transition-colors duration-75 ease-linear text-base ${
        hasScrolled ? "bg-polarNight-lighter shadow-md" : "bg-transparent"
      }`}
    ></NavBar>
  );
};

export default Header;
