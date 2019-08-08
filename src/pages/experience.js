import React from "react";
import SEO from "../components/Layout/SEO";
import { graphql, useStaticQuery } from "gatsby";

const Experience = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query CVList {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Experience" />
      <div>
        <h1>Experience</h1>
        <p>Hello I'm Rob</p>
        {allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.frontmatter.title}>{node.frontmatter.title}</div>
        ))}
      </div>
    </>
  );
};

export default Experience;
