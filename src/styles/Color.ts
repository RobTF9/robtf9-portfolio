import { createGlobalStyle } from "styled-components";

const Color = createGlobalStyle`
  :root {
    --black: #222222;
    --bg: #ededed;
    --white: #ffffff;
    --blue: #2591B4;
    --elliptic: #00838F;
    --parrot: #395EBF;
    --mentor: #D94A30;
    --ranges: #5AB4F1;
    --vojo: #89A258;
    --maibee: #9186AE;
    --ps: #ECB540;
    --rac: #EC5D2A;
    --e78: #26599B;
    --unite: #544F4F;
    --filtration: #A50606;
  }

  html {
    background-color: var(--bg);
  }

  * {
    color: var(--black);
  }

  a {
    color: var(--blue);
  }


`;

export default Color;
