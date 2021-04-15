import { FaTools } from "@react-icons/all-files/fa/FaTools";
import React from "react";

const UnderConstruction = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 mb-36">
      <FaTools size="250" className="text-snowStorm mb-5" />
      <h1 className="tracking-widest text-snowStorm text-xl">
        Coming Soon (maybe)!
      </h1>
    </div>
  );
};

export default UnderConstruction;
