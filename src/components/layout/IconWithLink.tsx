import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type IconWithLinkProps = {
  icon: IconProp;
  link: string;
  style?: string;
};

const IconWithLink = ({
  icon,
  link,
  style,
}: IconWithLinkProps): JSX.Element => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className={style} />
    </a>
  );
};

export default IconWithLink;
