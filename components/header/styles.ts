import styled, { css, keyframes } from 'styled-components'

const homeHeaderIntro = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`

export const HeaderWrapper = styled.header<{ animate: boolean }>`
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 700px) {
      font-size: 2.25rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 10rem;

    @media screen and (max-width: 700px) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  p span {
    display: block;

    @media screen and (max-width: 490px) {
      display: inline;
    }
  }

  ${({ animate }) =>
    animate &&
    css`
      h1 {
        opacity: 0;
        transform: translateY(2rem);
        animation: ${homeHeaderIntro} 1s 1.5s forwards;
      }

      p span {
        opacity: 0;
        transform: translateY(2rem);

        &:nth-of-type(1) {
          animation: ${homeHeaderIntro} 1s 2.5s forwards;
        }

        &:nth-of-type(2) {
          animation: ${homeHeaderIntro} 1s 3.5s forwards;
        }

        &:nth-of-type(3) {
          animation: ${homeHeaderIntro} 1s 4.5s forwards;
        }
      }
    `}
`
