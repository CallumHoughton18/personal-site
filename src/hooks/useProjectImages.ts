import { graphql, useStaticQuery } from "gatsby";

const useProjectImages = (): any => {
  const { allFile } = useStaticQuery(graphql`
    query {
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
  return allFile.edges;
};

export default useProjectImages;
