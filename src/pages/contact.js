import React, { useState } from "react";
import SEO from "../components/Layout/SEO";
import Container from "../components/Common/Container";
import Hero from "../components/Common/Hero";

const Contact = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, submit] = useState(false);

  function handleChange(event) {
    setEnquiry({
      ...enquiry,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...enquiry }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    event.preventDefault();
  }

  const { name, email, message } = enquiry;

  return (
    <>
      <SEO title="Contact" />
      <Hero>
        Get in <span>contact.</span>
      </Hero>
      <Container>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Container>
    </>
  );
};

export default Contact;
