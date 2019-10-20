import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { HomeContainer, Text, Image } from "./HomeStyles";
import TextLink from "../Common/TextLink";
import { animations } from "../../shared/transitions";

const Home = () => {
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
    <>
      <HomeContainer>
        <Text style={animations.verticleSlide(`-15rem`, 0)}>
          <h1>Hey, my name’s Rob.</h1>
          <p>
            I’m a freelance user interface designer and developer based in
            Bristol, UK.
          </p>
          <TextLink to="/about" text="More about me" />
          <TextLink to="/projects" text="My recent projects" />
          <TextLink to="/contact" text="Get in touch" />
          <TextLink to="/experience" text="Take a look at my CV" />
        </Text>
        <Image style={animations.verticleSlide(`15rem`, 0)}>
          <Img fluid={file.childImageSharp.fluid} />
        </Image>
      </HomeContainer>
    </>
  );
};

export default Home;
