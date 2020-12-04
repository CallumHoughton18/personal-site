import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactsRibbon = (): JSX.Element => {
  //TODO: Add type to pass objects to ribbon with icon and href instead of hardcoding
  return (
    <div className="flex flex-col min-h-full">
      <a
        href="https://github.com/callumhoughton18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="mb-2" />
      </a>
      <a
        href="https://twitter.com/CallummmmmmH"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} className="mb-2" />
      </a>
      <a
        href="https://uk.linkedin.com/in/callum-houghton-346365114"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default ContactsRibbon;
