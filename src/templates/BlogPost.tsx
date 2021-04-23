import Header from "@/components/Header";
import PageWithNavBar from "@/components/layout/PageWithHeader";
import { MarkdownRemark } from "@/__autogenerated__/gatsby-graphql";
import { graphql } from "gatsby";
import React from "react";

type BlogPostProps = {
  data: {
    markdownRemark: MarkdownRemark;
  };
};

const BlogPost = ({ data }: BlogPostProps): JSX.Element => {
  const post = data.markdownRemark;
  const parsedDate = new Date(post.frontmatter.date);
  return (
    <PageWithNavBar header={<Header />}>
      <div className="blogpost">
        <span className="title">{post.frontmatter.title}</span>
        <small>{`${parsedDate.toDateString()}`}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="body" />
      </div>
    </PageWithNavBar>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;