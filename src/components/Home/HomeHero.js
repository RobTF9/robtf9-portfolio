import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import colors from "../../shared/colors";

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

  return (
    <Container>
      <Text>
        <h4>Robert Squires</h4>
        <h1>
          I create user centred digital products <span>&amp;</span> interfaces.
        </h1>
      </Text>
      <Img className="image" fluid={file.childImageSharp.fluid} />
    </Container>
  );
};

export default HomeHero;

const Container = styled.header`
  position: relative;
  grid-column: 3 / 11;
  height: 70vh;
  margin-top: 25vh;

  .image {
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: 50%;
  }
`;

const Text = styled.div`
  position: relative;
  width: 50%;

  h4 {
    margin-bottom: 2rem;
    color: ${colors.blue};
  }

  h1 {
    span {
      color: ${colors.blue};
    }
  }
`;
