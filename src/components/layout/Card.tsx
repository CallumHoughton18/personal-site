import React, { ReactNode } from "react";

type CardProps = {
  cardStyle?: string;
  innerChildrenStyle?: string;
  children?: ReactNode;
};

const Card = ({
  cardStyle,
  innerChildrenStyle,
  children,
}: CardProps): JSX.Element => {
  return (
    <div
      className={`flex flex-row m-8 rounded-lg border shadow-l bg-gray-700 border-transparent ${cardStyle}`}
    >
      <div
        className={`flex flex-col justify-start items-center ${innerChildrenStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
