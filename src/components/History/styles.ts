import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
  transform: translateY(120px);
  opacity: 0;
}

100% {
  transform: translateY(0);
  opacity: 1;
}
`;

export const HistoryWrapper = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 90px 0;
`;

export const Item = styled.div<{
  width: number;
  left: number;
  color: string;
  name: string;
  index: number;
}>`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  opacity: 0;
  animation: ${fadeIn} 1.2s ${({ index }) => (index + 1) / 10 + 1 * 1.2}s
    ease-in-out forwards;

  button {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0;
    height: 100%;
    width: 100%;
    margin-left: ${({ left }) => `${left}%`};
    transform: scale(${({ width }) => width}%, 1);
    background-color: var(--${({ color }) => color});
    border: none;
    transition: all 0.3s ease-in-out;
    transform-origin: left;
    cursor: pointer;
    white-space: nowrap;

    &::after {
      position: absolute;
      left: 100%;
      top: 0;
      content: "";
      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-left: 20px solid var(--${({ color }) => color});
      border-bottom: 20px solid transparent;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.3s ease-in-out;
    }
  }

  p {
    color: ${({ name }) =>
      name === "ps" || name === "ranges" ? "var(--black)" : "var(--white)"};
    position: relative;
    z-index: 5;
    margin: 0;
    line-height: 40px;
    opacity: 0;
    transition: all 0.3s ease-in-out 0.1s;
    cursor: pointer;

    span {
      opacity: 0.6;
    }

    strong,
    span {
      color: inherit;
    }
  }

  &:hover button,
  button:focus {
    transform: scale(1);
    margin-left: 0;
    border: none;
    outline: none;

    &::after {
      transform: scaleX(1);
      transition: all 0.3s ease-in-out;
    }

    + p {
      opacity: 1;
      transform: translateX(10px);
    }
  }
`;
