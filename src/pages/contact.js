import React from "react";
import SEO from "../components/Layout/SEO";
import Container from "../components/Common/Container";
import Hero from "../components/Common/Hero";

const Contact = () => {
  // const submitHandler = event => {
  //   event.preventDefault();
  //   console.log("Submitted");
  // };
  return (
    <>
      <SEO title="Contact" />
      <Hero>
        Get in <span>contact.</span>
      </Hero>
      <Container>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="Contact Form" />
          <div>
            <label>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </Container>
    </>
  );
};

export default Contact;
