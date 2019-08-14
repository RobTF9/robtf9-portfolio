import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import colors from "../../shared/colors";
import Img from "gatsby-image";
import SEO from "../Layout/SEO";
import OtherProjects from "./OtherProjects";
import breakpoints from "../../shared/breakpoints";

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
            fluid(maxWidth: 1300) {
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
                fluid(maxWidth: 1300) {
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
  }
`;

const Copy = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 2 / 12;
  margin: 15rem 0;

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
  }
`;

const Body = styled.article`
  grid-column: 2 / 12;
  margin: 5rem 0;

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
    margin: 15rem 0;
  }

  * {
    box-shadow: none !important;
  }

  p {
    margin-bottom: 2.5rem;
  }

  .OffsetContent {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-bottom: 5rem;

    p {
      font-weight: 600;
    }

    img {
      max-width: 30rem;
    }

    .title {
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      font-weight: 200;
      border-bottom: 0.05rem ${colors.white} solid;
    }

    ${breakpoints.tablet} {
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 2rem;
      padding-top: 5rem;
      margin-bottom: 10rem;
      border-top: 0.05rem ${colors.white} solid;

      .title {
        border-bottom: none;
        padding-right: 2rem;
      }
    }

    ${breakpoints.desktop} {
      grid-template-columns: 2fr 2fr;
    }
  }
`;
