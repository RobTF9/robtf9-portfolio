import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";

const Content = styled.div`
  position: relative;
`;

export const LeftContent = styled(Content)`
  grid-column: 1 / 11;
`;

export const RightContent = styled(Content)`
  grid-column: 3 / -1;
`;

export const MiddleContent = styled(Content)`
  grid-column: 3 / 11;
`;
export const Text = styled.div`
  position: absolute;
  padding: 5rem;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.25);
  max-width: 25%;
  bottom: calc(-100vh / 12);

  h3 {
    margin-bottom: 1rem;
  }

  ${({ layout }) => {
    if (layout === "Left") {
      return `right: calc(-100vh / 12);`;
    }
    if (layout === "Right") {
      return `left: calc(-100vh / 12);`;
    }
    if (layout === "Middle") {
      return;
    }
  }}
`;
