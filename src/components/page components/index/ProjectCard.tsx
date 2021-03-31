import Card from "@/components/layout/Card";
import React, { ReactNode } from "react";
import Img, { FluidObject } from "gatsby-image";
import IconWithLink from "@/components/layout/IconWithLink";
import { IconWithLinks } from "@/components/types";
import PillsCollection from "@/components/layout/PillCollection";

type ProjectCardProps = {
  children?: ReactNode;
  projectName: string;
  projectLinks: IconWithLinks[];
  projectDesc: string;
  projectTech: string[];
  ProjectImg: FluidObject;
};

const ProjectCard = ({
  projectName,
  projectLinks,
  projectDesc,
  ProjectImg,
  projectTech,
}: ProjectCardProps): JSX.Element => {
  const projectIcons = projectLinks.map((val, indx) => {
    return (
      <IconWithLink
        icon={val.icon}
        link={val.link}
        style={`${val.style} hover:text-nordSnowStorm-lighter active:text-nordSnowStorm-lighter`}
        key={indx}
      />
    );
  });
  return (
    <Card className="max-w-xl overflow-hidden shadow-inner border-none sm:flex-50 xl:flex-25 sm:h-card mt-8 sm:m-8 bg-nordBg">
      <Img
        fluid={ProjectImg}
        alt="project name"
        className="w-overflow sm:h-56"
      ></Img>
      <div className="flex flex-row justify-start text-gray-400 self-start px-6 mt-4 text-xl">
        {projectIcons}
      </div>
      <div className="px-6 pb-4 pt-2">
        <div className=" text-gray-50 font-bold text-xl">{projectName}</div>
        <hr className="mb-5 border border-gray-100"></hr>
        <p className="text-white text-sm leading-relaxed tracking-normal">
          {projectDesc}
        </p>
      </div>
      <PillsCollection
        pillsText={projectTech}
        pillStyle="bg-gray-200 mr-0.5 ml-0.5 mt-1 text-gray-700 tracking-wide"
      />
    </Card>
  );
};

export default ProjectCard;
