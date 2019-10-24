import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";

const ContactCard = () => {
  return (
    <Card>
      <h1>Contact</h1>
      <p>Leave me a message or call:</p>
      <a href="tel:+447784329127">(+44) 7784 329 127</a>
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
