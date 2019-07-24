import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

const postLayout = () => {
  return (
    <Layout>
      <h1>Project Layout</h1>
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery {
    markdownRemark(frontmatter: { slug: { eq: "/panasonic" } }) {
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
