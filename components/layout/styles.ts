import styled, { css, keyframes } from 'styled-components'

const outerIntro = keyframes`
  from {
    transform: translateY(-1rem);
  }
  to {
    transform: translateY(0rem);
  }
`

export const Outer = styled.div<{ animate: boolean }>`
  position: relative;
  background-color: var(--bg);
  height: fit-content;
  width: 100%;
  padding-bottom: 5rem;
  border-top: 1rem solid var(--bl);
  margin-bottom: 20rem;
  z-index: 1;
  min-height: 110vh;
  overflow-x: hidden;
  box-shadow: 0 4rem 4rem 1rem var(--bl);

  @media screen and (max-width: 700px) {
    border-top: 0.5rem solid var(--bl);
  }

  ${({ animate }) =>
    animate &&
    css`
      animation: ${outerIntro} 1s forwards;
    `}
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;

  & > h2 {
    font-size: 3rem;
    transform: translateY(-23rem);
    position: relative;
    z-index: 200;
    width: 980px;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
      max-width: 100%;
      padding: 0 2rem;
    }

    @media screen and (max-width: 490px) {
      font-size: 2rem;
      transform: translateY(-22rem) translateX(1rem);
      padding: 0;
    }
  }

  footer {
    position: fixed;
    height: 26rem;
    z-index: 0;
    width: 980px;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    font-size: 1.5rem;
    align-items: center;

    @media screen and (max-width: 1000px) {
      max-width: 100%;
      padding: 0 2rem;
    }

    @media screen and (max-width: 490px) {
      font-size: 1.25rem;
      padding: 0 1rem;
    }
  }
`

export const Wrapper = styled.main`
  position: relative;
  z-index: 1;
  background-color: var(--bg);
  width: 980px;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 2rem;
  }

  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
`
