import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HomeHero = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
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
        <h1>I create user centred digital products &amp; interfaces.</h1>
      </Text>
      <Img className="image" fluid={placeholderImage.childImageSharp.fluid} />
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
    width: calc((100% / 8) * 4);
  }
`;

const Text = styled.div`
  position: relative;
  width: calc((100% / 8) * 5);

  h4 {
    margin-bottom: 2rem;
  }
`;
