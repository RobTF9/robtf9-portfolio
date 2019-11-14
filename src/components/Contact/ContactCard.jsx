import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import { FaLink } from "react-icons/fa";

const ContactCard = ({ title, copy, link }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{copy}</p>
      {link ? (
        <a href={link}>
          View the project <FaLink />
        </a>
      ) : (
        <a href="tel:+447784329127">(+44) 7784 329 127</a>
      )}
    </Card>
  );
};

const Card = styled.div`
  margin-bottom: 5rem;
  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  a {
    color: ${colors.blue};

    svg {
      transform: translate(0.75rem, 0.25rem);
    }
  }
`;

export default ContactCard;
