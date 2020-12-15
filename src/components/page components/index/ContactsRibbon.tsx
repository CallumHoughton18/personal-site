import React from "react";
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import IconWithLink from "@/components/layout/IconWithLink";

const ContactsRibbon = (): JSX.Element => {
  //TODO: Add type to pass objects to ribbon with icon and href instead of hardcoding
  return (
    <div className="flex flex-col min-h-full">
      <IconWithLink
        link="https://github.com/callumhoughton18"
        icon={faGithubSquare}
        style="mb-2"
      />
      <IconWithLink
        icon={faTwitterSquare}
        style="mb-2"
        link="https://twitter.com/CallummmmmmH"
      />
      <IconWithLink
        icon={faLinkedin}
        link="https://uk.linkedin.com/in/callum-houghton-346365114"
      />
    </div>
  );
};

export default ContactsRibbon;
