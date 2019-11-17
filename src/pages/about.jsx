import React from "react";
import SEO from "../components/Layout/SEO";
import { ContentContainer } from "../components/Common/Container";
import { Link } from "gatsby";
import { animations } from "../shared/transitions";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
        <h1>About</h1>
        <p>
          I'm a UI/UX designer currently working for Bristol agency Proctor +
          Stevenson. My role is varied and always interesting, there is no
          typical day. I could be working on anything from design systems for
          international companies, user experience prototyping and testing, or
          creating animated interface demos with code or prototyping tools.
          <br />
          <br />
          I originally trained as a graphic designer, studying at the Arts
          University Bournemouth. My time here gave me a great foundation in
          layout, hierarchy and visual design. It’s also where my keen eye for
          typography originated. After finishing my degree in 2014 I jumped head
          first into the digital industry learning all I could about the world
          of user centred design and research from a variety of intern,
          freelance and permanent positions.
          <br />
          <br />
          Outside of work I like to work on full stack web applications with a
          combination of React and backend services like Firebase and Netlify.
          This allows me play around with new technology and gives me a better
          understanding of digital industry as a whole. It's also incredibly
          fun!
          <br />
          <br />
          If I'm not desiging or coding something I'll be hanging off the side
          of a mountain somewhere or exploring the ruins of an old castle.
          <br />
          <br />
          If that sounds like someone you’d like to collaborate with then{" "}
          <Link to="/contact">get in touch.</Link>
        </p>
      </ContentContainer>
    </>
  );
};

export default About;
