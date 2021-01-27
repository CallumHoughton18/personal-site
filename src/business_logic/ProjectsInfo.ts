import { IconWithLinks } from "@/components/types";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

type ProjectInfo = {
  desc: string;
  links: IconWithLinks[];
};

const ProjectInfo = (): ProjectInfo[] => {
  return [
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faYoutube,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://github.com/",
          style: "",
        },
      ],
    },
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faYoutube,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://github.com/",
          style: "",
        },
      ],
    },
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faYoutube,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://github.com/",
          style: "",
        },
      ],
    },
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faYoutube,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://github.com/",
          style: "",
        },
      ],
    },
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil.",
      links: [
        {
          icon: faGithub,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faYoutube,
          link: "https://github.com/",
          style: "mr-5",
        },
        {
          icon: faExternalLinkAlt,
          link: "https://github.com/",
          style: "",
        },
      ],
    },
  ];
};

export default ProjectInfo;
