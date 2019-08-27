import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { useSpring, animated, config } from "react-spring";
import { FiArrowDown } from "react-icons/fi";

const HomeHero = () => {
  const [distance, setDistance] = useState();

  useEffect(() => {
    typeof window !== `undefined` &&
      window.addEventListener("scroll", () => {
        setDistance(window.pageYOffset);
      });
    return () => {
      typeof window !== `undefined` &&
        window.removeEventListener("scroll", () => {
          setDistance(window.pageYOffset);
        });
    };
  }, []);

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
    transform: "translate3d(0, 0rem, 0)",
    from: { opacity: 0, transform: "translate3d(0, 15rem, 0)" },
    config: config.molasses,
    delay: 250,
  });

  const scrollAnimation = useSpring({
    opacity:
      typeof window !== `undefined` && distance > window.innerHeight / 3
        ? 0
        : 1,
    transform:
      typeof window !== `undefined` && distance > window.innerHeight / 3
        ? "translate3d(0, -15rem, 0)"
        : "translate3d(0, 0rem, 0)",
    config: config.spring,
  });

  return (
    <Container style={animation}>
      <Text style={scrollAnimation}>
        <h4>Robert Squires</h4>
        <h1>I'm a User Interface Designer based in Bristol, UK.</h1>
      </Text>
      <Image style={scrollAnimation}>
        <Img fluid={file.childImageSharp.fluid} />
      </Image>
      <Projects style={scrollAnimation}>
        <FiArrowDown />
      </Projects>
      <Border style={scrollAnimation} />
    </Container>
  );
};

export default HomeHero;

const Projects = styled(animated.h2)`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  font-weight: 100;
  color: ${colors.blue};
`;

const Container = styled(animated.header)`
  position: relative;
  grid-column: 2 / 12;
  height: 70vh;
  margin-top: 15vh;
  margin-bottom: 15vh;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
    margin-top: 20vh;
  }

  ${breakpoints.desktop} {
    margin-top: 25vh;
  }
`;

const Border = styled(animated.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  border-bottom: 0.1rem ${colors.blue} solid;
  border-top: 0.1rem ${colors.blue} solid;
`;

const Text = styled(animated.div)`
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

const Image = styled(animated.div)`
  position: absolute !important;
  bottom: 0;
  right: 0;
  width: 80%;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: 100%;
  }

  ${breakpoints.desktop} {
    width: 40%;
  }
`;
