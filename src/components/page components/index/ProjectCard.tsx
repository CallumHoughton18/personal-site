import Card from "@/components/layout/Card";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import Img from "gatsby-image";

type ProjectCardProps = {
  children?: ReactNode;
};

const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "xlsxapp.png" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Card style="max-w-xl">
      <Img
        fixed={data.file.childImageSharp.fixed}
        className="w-full"
        alt="project name"
      ></Img>
      <div className="px-6 py-4 mt-8">
        <div className=" text-gray-50 font-bold text-xl mb-2">Project Name</div>
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
