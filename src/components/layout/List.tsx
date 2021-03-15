import React from "react";

export type ListProps = {
  items: ListElement[];
};

export type ListElement = {
  id: string | number;
  content: JSX.Element;
};

const List = ({ items }: ListProps): JSX.Element => {
  const listItems = items.map((item, indx) => {
    return (
      <li key={`${item.id}-${indx}`} className="mb-1">
        {item.content}
      </li>
    );
  });
  return (
    <ul className="text-xl list-disc mb-5 md:mb-0 tracking-widest">
      {listItems}
    </ul>
  );
};

export default List;
