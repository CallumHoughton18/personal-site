import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UnderConstruction = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 mb-36">
      <FontAwesomeIcon
        icon={faTools}
        size="10x"
        className="text-snowStorm mb-5"
        fixedWidth={true}
      />
      <h1 className="tracking-widest text-snowStorm text-xl">
        Coming Soon (maybe)!
      </h1>
    </div>
  );
};

export default UnderConstruction;
