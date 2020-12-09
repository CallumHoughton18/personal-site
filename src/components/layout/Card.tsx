import React, { ReactNode } from "react";

type CardProps = {
  style?: string;
  children?: ReactNode;
};

const Card = ({ style, children }: CardProps): JSX.Element => {
  return (
    <div
      className={`flex flex-row m-8 rounded-lg border shadow-l bg-gray-700 border-transparent ${style}`}
    >
      <div className="flex flex-col justify-center items-center p-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
