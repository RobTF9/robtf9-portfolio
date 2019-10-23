import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import breakpoints from "../../shared/breakpoints";
import { transitions } from "../../shared/transitions";
import colors from "../../shared/colors";

export const Card = styled.article`
  position: relative;
  padding-top: 100%;

  ${breakpoints.desktop} {
    padding-top: 35%;
  }
`;

export const Background = styled.span`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  opacity: 0.025;
`;

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Copy = styled.div`
  position: relative;
  padding: 2rem 2rem 8rem 2rem;

  ${breakpoints.desktop} {
    padding: 4rem;
  }
`;

export const Client = styled.p`
  font-weight: 800;
  color: ${({ color }) => color};
`;

export const ImageWrapper = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Button = styled(AniLink)`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.5rem 4rem;
  text-align: right;
  background-color: ${({ color }) => color};

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
