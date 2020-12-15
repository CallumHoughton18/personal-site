import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";

const Projects = (): JSX.Element => {
  return (
    <Fragment>
      <ProjectCard
        projectDesc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil."
        }
        projectLinks={[
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
        ]}
      />
      <ProjectCard
        projectDesc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil."
        }
        projectLinks={[
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
        ]}
      />
      <ProjectCard
        projectDesc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentiumnihil."
        }
        projectLinks={[
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
        ]}
      />
    </Fragment>
  );
};

export default Projects;
