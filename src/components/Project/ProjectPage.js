import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout/Layout";

const postLayout = ({ data, location }) => {
  return (
    <Layout location={location}>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

export default postLayout;