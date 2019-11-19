import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import { transitions } from "../../shared/transitions";
import breakpoints from "../../shared/breakpoints";

const ContactForm = ({ name }) => {
  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={name} />
      <Input>
        <label htmlFor="name">
          <p>Your name</p>
        </label>
        <input type="text" name="name" id="name" required />
      </Input>
      <Input>
        <label htmlFor="email">
          <p>Your email</p>
        </label>
        <input type="email" name="email" id="email" required />
      </Input>
      <Input>
        <label htmlFor="message">
          <p>Message</p>
        </label>
        <textarea name="message" id="message" required />
      </Input>
      <Button type="submit">
        <p>Send</p>
        <ButtonSpan />
      </Button>
    </form>
  );
};

export default ContactForm;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  p {
    padding: 0 1rem;
    width: fit-content;
    background-color: ${colors.black};
    transform: translate(1rem, 1rem);
  }

  input,
  textarea {
    border: 0.1rem solid ${colors.white};
    color: ${colors.white};
    padding: 2rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  position: relative;
  z-index: 0;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 1.5rem 8rem;
  float: right;
  width: 100%;

  ${breakpoints.tablet} {
    width: auto;
  }
`;

const ButtonSpan = styled.span`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.5;
  transform: scale3d(1, 0, 1);
  transform-origin: 50% 100%;
  ${transitions.mediumSnap}

  ${Button}:hover & {
    transform: scale3d(1, 1, 1);
  }
`;
