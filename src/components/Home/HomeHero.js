import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { useSpring, animated, config } from "react-spring";

const HomeHero = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rs-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const animation = useSpring({
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(15rem)" },
    config: config.molasses,
    delay: 250,
  });

  return (
    <Container style={animation}>
      <Text>
        <h4>Robert Squires</h4>
        <h1>
          I create user centred digital products <span>&amp;</span> interfaces.
        </h1>
      </Text>
      <Img fluid={file.childImageSharp.fluid} />
    </Container>
  );
};

export default HomeHero;

const Container = styled(animated.header)`
  position: relative;
  grid-column: 2 / 12;
  height: 70vh;
  margin-top: 15vh;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: 80%;

    ${breakpoints.desktop} {
      width: 40%;
    }
  }

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
    margin-top: 20vh;
  }

  ${breakpoints.desktop} {
    margin-top: 25vh;
  }
`;

const Text = styled.div`
  position: relative;

  ${breakpoints.desktop} {
    width: 60%;
  }

  h4 {
    margin-bottom: 1rem;
    color: ${colors.blue};
  }

  h1 {
    span {
      color: ${colors.blue};
    }
  }
`;
