import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";

const ContactForm = ({ name }) => {
  return (
    <div>
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
          <label>
            <h4>Your name</h4>
          </label>
          <input type="text" name="name" required />
        </Input>
        <Input>
          <label>
            <h4>Your email</h4>
          </label>
          <input type="email" name="email" required />
        </Input>
        <Input>
          <label>
            <h4>Message</h4>
          </label>
          <textarea name="message" required />
        </Input>
        <Button type="submit">
          <h4>Send</h4>
          <ButtonSpan />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

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
  padding: 2.5rem 6rem;
  width: 100%;
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
  transition: transform 0.15s ease-in-out;

  ${Button}:hover & {
    transform: scale3d(1, 1, 1);
  }
`;
