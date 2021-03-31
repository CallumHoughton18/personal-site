import React from "react";

export type ListProps = {
  items: ListElement[];
  className: string;
};

export type ListElement = {
  id: string | number;
  content: JSX.Element;
};

const List = ({ items, className }: ListProps): JSX.Element => {
  const listItems = items.map((item, indx) => {
    return (
      <li key={`${item.id}-${indx}`} className="mb-1">
        {item.content}
      </li>
    );
  });
  return <ul className={className}>{listItems}</ul>;
};

export default List;
