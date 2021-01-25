import useProjectImages from "@/hooks/useProjectImages";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FluidObject } from "gatsby-image";
import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";

const Projects = (): JSX.Element => {
  //TODO: add type safety onto useProjectImages hook return value
  const images = useProjectImages();

  //TODO: find better way of assigning project Img to each card, with safer index limit
  const projImg1 = images[0].node.childImageSharp.fluid as FluidObject;
  const projImg2 = images[1].node.childImageSharp.fluid as FluidObject;
  const projImg3 = images[2].node.childImageSharp.fluid as FluidObject;
  const projImg4 = images[3].node.childImageSharp.fluid as FluidObject;
  const projImg5 = images[4].node.childImageSharp.fluid as FluidObject;
  return (
    <Fragment>
      <ProjectCard
        ProjectImg={projImg1}
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
        ProjectImg={projImg2}
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
        ProjectImg={projImg3}
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
        ProjectImg={projImg4}
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
        ProjectImg={projImg5}
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
