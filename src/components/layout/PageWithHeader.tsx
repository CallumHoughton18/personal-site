import React from "react";

type PageWithNavBarProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const PageWithNavBar = ({
  header,
  children,
}: PageWithNavBarProps): JSX.Element => {
  //TODO: Issue here, if page is refreshed scrolled is always false
  return (
    <React.Fragment>
      <header className="fixed z-50 inset-x-0">{header}</header>
      <main className="flex flex-col pt-12">{children}</main>
    </React.Fragment>
  );
};

export default PageWithNavBar;
