import { createGlobalStyle } from "styled-components";

const Typograhy = createGlobalStyle`
  :root {
    --baseFontSize: 15px;
  }

  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-family: 'Libre Baskerville';
    font-size: var(--baseFontSize);
    font-weight: 400;
    line-height: 27px;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  strong {
    font-weight: 700;
  }

  p {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default Typograhy;
