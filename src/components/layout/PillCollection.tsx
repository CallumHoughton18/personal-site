import React from "react";
import Pill from "./Pill";

type PillCollectionProps = {
  pillsText: string[];
};

const PillsCollection = ({ pillsText }: PillCollectionProps): JSX.Element => {
  const pills = pillsText.map((pillText, indx) => {
    return <Pill pillText={pillText} key={`${pillText}-${indx}`} />;
  });
  return <div className="px-6 py-4">{pills}</div>;
};

export default PillsCollection;
