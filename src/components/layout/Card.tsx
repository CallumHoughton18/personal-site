import React, { ReactNode } from "react";

type CardProps = {
  className?: string;
  innerChildrenStyle?: string;
  children?: ReactNode;
};

const Card = ({
  className,
  innerChildrenStyle,
  children,
}: CardProps): JSX.Element => {
  return (
    <div
      className={`flex flex-row rounded-lg border shadow-l border-transparent ${className}`}
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
