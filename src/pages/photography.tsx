import React from "react";
import Header from "@/components/Header";
import PageWithNavBar from "@/components/layout/PageWithHeader";
import UnderConstruction from "@/components/multipage components/UnderConstruction";

const photography = (): JSX.Element => {
  return (
    <PageWithNavBar header={<Header />}>
      <UnderConstruction />
    </PageWithNavBar>
  );
};

export default photography;
