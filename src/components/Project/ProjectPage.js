import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "../Layout/SEO";
import OtherProjects from "./OtherProjects";
import breakpoints from "../../shared/breakpoints";
import Body from "./ProjectBody";

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
      <Hero color={frontmatter.color}>
        <Copy>
          <h4>{frontmatter.client}</h4>
          <h1>{frontmatter.title}</h1>
        </Copy>
        <Img fluid={frontmatter.featuredimage.childImageSharp.fluid} />
      </Hero>
      <Body>
        <div className="OffsetContent">
          <p className="title">The problem</p>
          <p>{frontmatter.outline}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </Body>
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
            fluid(maxWidth: 1920) {
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
                fluid(maxWidth: 1920) {
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

const Hero = styled.header`
  position: relative;
  grid-column: 1 / -1;
  background-color: ${({ color }) => color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  overflow: hidden;

  .gatsby-image-wrapper {
    opacity: 0.25;
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;

    ${breakpoints.desktop} {
      width: 50%;
      top: 0;
      margin: 0 auto;
    }
  }
`;

const Copy = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 2 / 12;
  margin: 15rem 0;

  ${breakpoints.desktop} {
    grid-column: 3 / 9;
  }
`;
