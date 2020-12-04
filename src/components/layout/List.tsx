import React, { ReactNode } from "react";

type ListProps = {
  items: string[];
};

const List = ({ items }: ListProps): JSX.Element => {
  const listItems = items.map((item, indx) => {
    return (
      <li key={`${item}-${indx}`} className="mb-1">
        {item}
      </li>
    );
  });
  return <ul className="text-xl list-disc mb-5 md:mb-0">{listItems}</ul>;
};

export default List;
