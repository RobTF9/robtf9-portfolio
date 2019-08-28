import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "../Layout/SEO";
import OtherProjects from "./OtherProjects";
import breakpoints from "../../shared/breakpoints";
import Body from "./ProjectBody";
import { useSpring, animated, config } from "react-spring";

const postLayout = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { edges } = data.allMarkdownRemark;

  // This is how you get the other projects array
  const projects = edges.filter(edge => {
    return edge.node.frontmatter.slug !== `${frontmatter.slug}`;
  });

  const textAnimation = useSpring({
    opacity: 1,
    transform: "translate3d(0, 0rem, 0)",
    from: { opacity: 0, transform: "translate3d(0, 30rem, 0)" },
    config: config.slow,
    delay: 250,
  });

  const heroAnimation = useSpring({
    transform: "scale(1,1)",
    from: { transform: "scale(1, 5)" },
    config: config.slow,
    delay: 250,
  });

  const imageAnimation = useSpring({
    opacity: 0.25,
    transform: "translate3d(0, 0rem, 0)",
    from: { opacity: 0, transform: "translate3d(0, 30rem, 0)" },
    config: config.slow,
    delay: 250,
  });

  const bodyAnimation = useSpring({
    opacity: 1,
    transform: "translate3d(0, 0rem, 0)",
    from: { opacity: 0, transform: "translate3d(0, 30rem, 0)" },
    config: config.slow,
    delay: 500,
  });

  return (
    <>
      <SEO title={frontmatter.client} />
      <Hero style={heroAnimation} color={frontmatter.color}>
        <Copy style={textAnimation}>
          <h4>{frontmatter.client}</h4>
          <h1>{frontmatter.title}</h1>
        </Copy>
        <Image
          style={imageAnimation}
          fluid={frontmatter.featuredimage.childImageSharp.fluid}
        />
      </Hero>
      <AnimatedBody style={bodyAnimation}>
        <div className="OffsetContent">
          <p className="title">The problem</p>
          <p>{frontmatter.outline}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </AnimatedBody>
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

const Image = animated(Img);

const AnimatedBody = animated(Body);

const Hero = styled(animated.header)`
  position: relative;
  grid-column: 1 / -1;
  background-color: ${({ color }) => color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  overflow: hidden;

  .gatsby-image-wrapper {
    opacity: 0.25;
    position: absolute !important;
    top: 0;
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

const Copy = styled(animated.div)`
  position: relative;
  z-index: 2;
  grid-column: 2 / 12;
  margin: 15rem 0;

  ${breakpoints.desktop} {
    grid-column: 3 / 9;
  }
`;
