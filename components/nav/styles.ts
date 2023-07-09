import styled, { css, keyframes } from 'styled-components'

const logoIntro = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`

const logoTextIntro = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`

export const Navigation = styled.nav<{ animate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    ul li a {
      font-size: 0.85rem;
    }
  }

  div {
    position: relative;
    border-bottom-right-radius: 1rem;
    width: 5rem;
    height: 5rem;
    background-color: var(--bl);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.5rem;

    a {
      text-decoration: none;
    }

    @media screen and (max-width: 700px) {
      width: 3.5rem;
      height: 3.5rem;
      border-bottom-right-radius: 0.5rem;
      padding: 0.25rem 0.35rem;
    }
  }

  div span {
    font-size: 2rem;
    font-weight: 700;

    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    a {
      font-size: 1.25rem;
    }
  }

  ${({ animate }) =>
    animate &&
    css`
      div {
        transform: translateY(-5rem);
        animation: ${logoIntro} 1s 0.5s forwards;
      }

      div span {
        opacity: 0;
        transform: translateY(-1rem);
        animation: ${logoTextIntro} 1s 0.5s forwards;
      }
    `}
`
