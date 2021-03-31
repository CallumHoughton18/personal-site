import React from "react";

type PillProps = {
  pillText: string;
  className: string;
};

const Pill = ({ pillText, className }: PillProps): JSX.Element => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${className}`}
    >
      {pillText}
    </span>
  );
};

export default Pill;
