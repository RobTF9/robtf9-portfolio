import styled, { css, keyframes } from 'styled-components'

const gridIntro = keyframes`
  from {
    transform: translateY(6rem);
  }
  to {
    transform: translateY(0rem);
  }
`

export const GridWrapper = styled.section<{ animate: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10rem;

  h2 {
    position: absolute;
    font-size: 3rem;
    top: -3rem;
    z-index: 100;

    @media screen and (max-width: 700px) {
      font-size: 2rem;
      top: -2rem;
    }
  }

  ${({ animate }) =>
    animate &&
    css`
      transform: translateY(12rem);
      animation: ${gridIntro} 1s 5.5s forwards;
    `}
`
