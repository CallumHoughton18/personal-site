import React from "react";
import Header from "@/components/Header";
import useHasScrolled from "@/hooks/useHasScrolled";

type PageWithNavBarProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const PageWithNavBar = ({
  header,
  children,
}: PageWithNavBarProps): JSX.Element => {
  const scrolled = useHasScrolled(100);
  return (
    <body>
      <header className={`fixed z-50 inset-x-0 ${scrolled && ""}`}>
        {header}
      </header>
      <main className="flex flex-col pt-12">{children}</main>
    </body>
  );
};

export default PageWithNavBar;
