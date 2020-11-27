import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const CircleAvatar = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img
      className="transform scale-50 rounded-full ring-4 ring-white shadow-m sm:scale-100"
      fixed={data.file.childImageSharp.fixed}
      alt="Picture of Callum"
    />
  );
};

export default CircleAvatar;
