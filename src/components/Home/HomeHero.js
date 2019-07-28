import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeroWrapper = styled.header`
  position: relative;
  grid-column: 3 / 11;
  height: 70vh;
  margin-top: 15rem;

  .text {
    position: relative;
    width: calc((100% / 8) * 5);
  }

  p {
    margin-bottom: 2rem;
  }

  .image {
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: calc((100% / 8) * 4);
  }
`;

const HomeHero = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroWrapper>
      <div className="text">
        <p>Robert Squires</p>
        <h1>I create user centred digital products &amp; interfaces.</h1>
      </div>
      <Img className="image" fluid={placeholderImage.childImageSharp.fluid} />
    </HeroWrapper>
  );
};

export default HomeHero;
