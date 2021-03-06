import { ProjectImagesQuery } from "@/__autogenerated__/gatsby-graphql";
import { graphql, useStaticQuery } from "gatsby";

const useProjectImagesQuery = (): ProjectImagesQuery => {
  const images = useStaticQuery<ProjectImagesQuery>(graphql`
    query ProjectImages {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "projectImages" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `);
  return images;
};

export default useProjectImagesQuery;
