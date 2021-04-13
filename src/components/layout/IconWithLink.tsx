import React from "react";
import { IconWithLinks } from "../types";

const IconWithLink = ({
  icon,
  link,
  className,
}: IconWithLinks): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </a>
  );
};

export default IconWithLink;
