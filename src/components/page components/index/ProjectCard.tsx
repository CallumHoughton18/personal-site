import Card from "@/components/layout/Card";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import Img from "gatsby-image";
import IconWithLink from "@/components/layout/IconWithLink";
import { IconWithLinks } from "@/components/types";

type ProjectCardProps = {
  children?: ReactNode;
  projectLinks: IconWithLinks[];
  projectDesc: string;
};

const ProjectCard = ({
  projectLinks,
  projectDesc,
}: ProjectCardProps): JSX.Element => {
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
  const projectIcons = projectLinks.map((val, indx) => {
    return (
      <IconWithLink
        icon={val.icon}
        link={val.link}
        style={val.style}
        key={indx}
      />
    );
  });
  return (
    <Card cardStyle="max-w-xl overflow-hidden shadow-inner border-none w-screen w-full">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="project name"
        className="w-overflow"
      ></Img>
      <div className="flex flex-row justify-start text-gray-400 self-start px-6 mt-4 text-xl">
        {projectIcons}
      </div>
      <div className="px-6 pb-4 pt-2">
        <div className=" text-gray-50 font-bold text-xl">Project Name</div>
        <hr className="mb-5 border border-gray-100"></hr>
        <p className="text-white text-base">{projectDesc}</p>
      </div>
      {/*TODO:Below could be its own component*/}
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
