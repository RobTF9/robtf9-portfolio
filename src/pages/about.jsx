import React from "react";
import SEO from "../components/Layout/SEO";
import Container from "../components/Common/Container";
import styled from "styled-components";
import breakpoints from "../shared/breakpoints";
import { graphql } from "gatsby";
import colors from "../shared/colors";
import { animations } from "../shared/transitions";

const About = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <SEO title="About" />
      <AboutContainer style={animations.verticleSlide(`15rem`, 0)}>
        <h1>{post.frontmatter.title}</h1>
      </AboutContainer>
    </>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default About;

const AboutContainer = styled(Container)`
  margin-top: 30vh;
  grid-gap: 2rem;

  ${breakpoints.tablet} {
    grid-gap: 3rem;
  }

  ${breakpoints.desktop} {
    grid-gap: 3rem;
    grid-column: 3 / 11;
  }

  a {
    color: ${colors.blue};
  }
`;
