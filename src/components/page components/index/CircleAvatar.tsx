import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const CircleAvatar = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
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
      className="transform scale-75 rounded-full ring-4 ring-white shadow-m sm:scale-100"
      alt="Avatar Image"
      fixed={data.file.childImageSharp.fixed}
    />
  );
};

export default CircleAvatar;
