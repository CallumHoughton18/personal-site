import Card from "@/components/layout/Card";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import Img from "gatsby-image";
import IconWithLink from "@/components/layout/IconWithLink";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  children?: ReactNode;
};

const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "xlsxapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  return (
    <Card cardStyle="max-w-xl overflow-hidden shadow-inner border-none">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="project name"
        className="w-overflow"
      ></Img>
      <div className="flex flex-row justify-start text-gray-400 self-start px-6 mt-4 text-xl">
        <IconWithLink icon={faGithub} link="https://github.com/" style="mr-5" />
        <IconWithLink
          icon={faYoutube}
          link="https://github.com/"
          style="mr-5"
        />
        <IconWithLink
          icon={faExternalLinkAlt}
          link="https://github.com/"
          style=""
        />
      </div>
      <div className="px-6 pb-4 pt-2">
        <div className=" text-gray-50 font-bold text-xl">Project Name</div>
        <hr className="mb-5 border border-gray-100"></hr>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          C#
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ReactJS
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Python
        </span>
      </div>
    </Card>
  );
};

export default ProjectCard;
