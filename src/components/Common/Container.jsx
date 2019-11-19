import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";
import { animated } from "react-spring";
import colors from "../../shared/colors";

const Container = styled(animated.div)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`;

export const ContentContainer = styled(Container)`
  grid-row-gap: 2rem;
  margin-top: 30vh;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;

    .full {
      grid-column: span 2;
    }

    h1,
    .left {
      grid-column: span 1;
    }

    article,
    p,
    .right {
      grid-column-start: 2;
    }
  }
`;

export const ContactContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  background-color: ${({ color }) => color};
  color: ${({ client }) =>
    client === "MyEthvault" ? `#02394A` : colors.white};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: calc(100vh / 6) 0;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.25);

  div {
    grid-column: 2 / 12;

    ${breakpoints.tablet} {
      grid-column: 3 / 11;
    }

    ${breakpoints.desktop} {
      grid-column: 3 / 6;
    }
  }

  form {
    grid-column: 2 / 12;

    ${breakpoints.tablet} {
      grid-column: 3 / 11;
    }

    ${breakpoints.desktop} {
      grid-column: 7 / 11;
    }

    input,
    textarea {
      border: ${({ client }) =>
        client === "MyEthvault" ? `0.1rem solid #02394A` : null};
    }
  }

  a {
    color: ${({ client }) =>
      client === "MyEthvault" ? `#02394A` : colors.white} !important;
  }

  label {
    p {
      background-color: ${({ color }) => color};
    }
  }

  button {
    color: ${({ color }) => color};
    background-color: ${({ client }) =>
      client === "MyEthvault" ? `#02394A` : colors.white};
  }
`;

export default Container;
