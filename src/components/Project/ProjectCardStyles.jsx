import styled from "styled-components";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import breakpoints from "../../shared/breakpoints";
import { transitions } from "../../shared/transitions";

export const Card = styled.article`
  position: relative;
  border: 0.1rem ${({ color }) => color} solid;
  padding: 4rem 4rem 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

export const Copy = styled.div`
  h3 {
    margin-bottom: 1.5rem;
  }
`;

export const Client = styled.p`
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: ${({ color }) => color};
`;

export const Image = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  max-height: 100%;
`;

export const Button = styled(AniLink)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 8rem);
  padding: 1.5rem 4rem;
  text-align: right;
  background-color: ${({ bg }) => bg};

  svg {
    margin: 0 0 -0.3rem;
    font-size: 1.6rem;
    transform: translate3d(0.5rem, 0, 0);
    ${transitions.quickSnap}
  }

  ${breakpoints.tablet} {
    &:hover {
      svg {
        transform: translate3d(1rem, 0, 0);
        ${transitions.quickSnap}
      }
    }
  }
`;
