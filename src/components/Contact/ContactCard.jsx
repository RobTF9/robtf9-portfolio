import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";

const ContactCard = ({ title, copy, link }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{copy}</p>
      {link ? (
        <a href={link}>View the project</a>
      ) : (
        <a href="tel:+447784329127">(+44) 7784 329 127</a>
      )}
    </Card>
  );
};

const Card = styled.div`
  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${colors.blue};
  }
`;

export default ContactCard;
