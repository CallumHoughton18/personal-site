import ProjectInfo from "@/business_logic/ProjectsInfo";
import { ProjectImagesQuery } from "@/__autogenerated__/gatsby-graphql";
import { FluidObject } from "gatsby-image";

type ProjectInfoWithImage = {
  image: FluidObject;
  info: ProjectInfo;
};
const useProjectInfoBuilder = (
  images: ProjectImagesQuery,
): ProjectInfoWithImage[] => {
  const projectsInfo = ProjectInfo();

  return projectsInfo.map<ProjectInfoWithImage>((project, indx) => {
    return {
      image: images.allFile.edges[indx].node.childImageSharp
        .fluid as FluidObject,
      info: project,
    };
  });
};

export default useProjectInfoBuilder;