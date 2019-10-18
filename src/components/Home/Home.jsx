import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useSpring, config } from "react-spring";
import { HomeContainer, Text, Image } from "./HomeStyles";

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

  const animation = useSpring({
    opacity: 1,
    transform: "translate3d(0, 0rem, 0)",
    from: { opacity: 0, transform: "translate3d(0, 15rem, 0)" },
    config: config.snap,
    delay: 250,
  });

  return (
    <HomeContainer>
      <Text style={animation}>
        <h1>Hey, my name’s Rob.</h1>
        <p>
          I’m a freelance user interface designer and developer based in
          Bristol, UK.
        </p>
      </Text>
      <Image style={animation}>
        <Img fluid={file.childImageSharp.fluid} />
      </Image>
    </HomeContainer>
  );
};

export default Home;
