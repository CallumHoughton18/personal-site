import React from "react";

type PillProps = {
  pillText: string;
};

const Pill = ({ pillText }: PillProps): JSX.Element => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-0.5 ml-0.5 mt-1 text-xs font-semibold text-gray-700 tracking-wide">
      {pillText}
    </span>
  );
};

export default Pill;
