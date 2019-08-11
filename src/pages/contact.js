import React from "react";
import SEO from "../components/Layout/SEO";
import Container from "../components/Common/Container";
import Hero from "../components/Common/Hero";
import styled from "styled-components";
import breakpoints from "../shared/breakpoints";
import { useSpring, config } from "react-spring";
import ContactForm from "../components/Common/ContactForm";

const Contact = () => {
  const animation = useSpring({
    transform: "translate3d(0, 0rem, 0)",
    from: { transform: "translate3d(0, 15rem, 0)" },
    config: config.molasses,
  });

  return (
    <>
      <SEO title="Contact" />
      <Hero>
        Get in <span>contact.</span>
      </Hero>
      <ContactContainer style={animation}>
        <ContactForm name="Contact Form" />
      </ContactContainer>
    </>
  );
};

export default Contact;

const ContactContainer = styled(Container)`
  grid-gap: 3rem;

  ${breakpoints.tablet} {
    grid-gap: 3rem;
  }

  ${breakpoints.desktop} {
    grid-gap: 3rem;
    grid-column: 7 / 11;
  }
`;
