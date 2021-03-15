import React from "react";

type PillProps = {
  pillText: string;
};

const Pill = ({ pillText }: PillProps): JSX.Element => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 m-1 text-sm font-semibold text-gray-700">
      {pillText}
    </span>
  );
};

export default Pill;
