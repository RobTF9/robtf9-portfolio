import React from "react";
import { graphql } from "gatsby";
import SEO from "../../Layout/SEO";
import OtherProjects from "./OtherProjects";
import ProjectHero from "./ProjectHero";
import ProjectIntro from "./ProjectIntro";

const postLayout = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { edges } = data.allMarkdownRemark;

  // This is how you get the other projects array
  const projects = edges.filter(edge => {
    return edge.node.frontmatter.slug !== `${frontmatter.slug}`;
  });

  return (
    <>
      <SEO title={frontmatter.client} />
      <ProjectHero
        title={frontmatter.title}
        client={frontmatter.client}
        color={frontmatter.color}
      />
      <ProjectIntro copy={frontmatter.outline} />
      <OtherProjects projects={projects} />
    </>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        client
        slug
        color
        outline
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            client
            slug
            color
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 3840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default postLayout;
