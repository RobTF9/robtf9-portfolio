import React from "react";
import { graphql } from "gatsby";
import SEO from "../../Layout/SEO";
import OtherProjects from "./OtherProjects";
import ProjectHero from "./ProjectHero";
import ProjectIntro from "./ProjectIntro";
import ProjectContent from "./ProjectContent";
import ProjectLink from "./ProjectLink";

const postLayout = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { client, title, color, outline, link, content } = frontmatter;
  const { edges } = data.allMarkdownRemark;

  // This is how you get the other projects array
  const projects = edges.filter(edge => {
    return edge.node.frontmatter.slug !== `${frontmatter.slug}`;
  });

  return (
    <>
      <SEO title={client} />
      <ProjectHero title={title} client={client} color={color} />
      <ProjectIntro copy={outline} />
      <ProjectContent client={client} content={content} color={color} />
      <ProjectLink link={link} client={client} title={title} color={color} />
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
        link
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      content {
        image {
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
