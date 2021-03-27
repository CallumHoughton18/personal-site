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
          className=" text-xs text-nordSnowStorm-lighter uppercase tracking-wide font-bold py-2 ml-5 mr-5
          hover:text-nordSnowStorm-default focus:text-nordSnowStorm-default active:focus:text-nordSnowStorm-default select-none"
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
      titleStyle="text-nordSnowStorm-lighter tracking-wide uppercase text-sm font-bold"
      navItemsStyle=""
      className={`rounded-b-sm transition-colors duration-75 ease-linear ${
        hasScrolled ? "bg-nordBg shadow-md" : "bg-transparent"
      }`}
    ></NavBar>
  );
};

export default Header;
