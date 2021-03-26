import React from "react";
import Header from "@/components/Header";
import PageWithNavBar from "@/components/layout/PageWithHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const photography = (): JSX.Element => {
  return (
    <PageWithNavBar header={<Header />}>
      <div className="flex flex-col items-center justify-center mt-36 mb-36">
        <FontAwesomeIcon
          icon={faTools}
          size="10x"
          className="text-white mb-5"
          fixedWidth={true}
        />
        <h1 className="tracking-wider text-nordSnowStorm-default text-xl">
          Coming Soon (maybe)!
        </h1>
      </div>
    </PageWithNavBar>
  );
};

export default photography;
