import React from "react";
import Header from "@/components/Header";

type PageWithNavBarProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const PageWithNavBar = ({
  header,
  children,
}: PageWithNavBarProps): JSX.Element => {
  return (
    <body>
      <header className="fixed z-50 inset-x-0">{header}</header>
      <main className="flex flex-col pt-12">{children}</main>
    </body>
  );
};

export default PageWithNavBar;
