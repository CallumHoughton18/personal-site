import React from "react";
import Pill from "./Pill";

type PillCollectionProps = {
  pillsText: string[];
  pillStyle: string;
};

const PillsCollection = ({
  pillsText,
  pillStyle,
}: PillCollectionProps): JSX.Element => {
  const pills = pillsText.map((pillText, indx) => {
    return (
      <Pill
        pillText={pillText}
        key={`${pillText}-${indx}`}
        className={pillStyle}
      />
    );
  });
  return <div className="px-6 py-4">{pills}</div>;
};

export default PillsCollection;
