import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconWithLinks } from "../types";

const IconWithLink = ({
  icon,
  link,
  className,
}: IconWithLinks): JSX.Element => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className={className} fixedWidth={true} />
    </a>
  );
};

export default IconWithLink;
