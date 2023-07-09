import styled from 'styled-components'

export const GridCard = styled.a<{ noEvents?: true }>`
  position: relative;
  height: 30rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  text-decoration: none;
  width: 50%;

  * {
    color: var(--wt);
  }

  ${({ noEvents }) => noEvents && `pointer-events: none;`}

  &.main {
    width: 100%;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 490px) {
    height: 25rem;
  }

  * {
    pointer-events: none;
  }

  :before {
    content: 'Read more';
    display: block;
    position: absolute;
    background-color: var(--bk);
    color: var(--bk);

    padding: 1rem;
    top: 0;
    right: 1rem;
    z-index: 200;
    transform: scale(1, 0);
    transform-origin: 0% 0%;
    transition: all 0.3s cubic-bezier(1, 0, 0, 1);
  }

  :hover:before {
    color: var(--wt);
    transform: scale(1, 1);
    transition: all 0.3s cubic-bezier(1, 0, 0, 1);
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;

    @media screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  p span {
    display: block;
    position: relative;
    width: fit-content;

    @media screen and (max-width: 490px) {
      display: inline;
    }
  }

  p span:after {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--fg);
    transform: scale(0, 1);
    transform-origin: 100% 0%;
    transition: transform 0.3s cubic-bezier(1, 0, 0, 1);
  }

  :hover > p span:after {
    transform: scale(1, 1);
    transform-origin: 0% 0%;
    transition: transform 0.3s cubic-bezier(1, 0, 0, 1);
  }

  img {
    position: absolute;
    display: block;
  }

  .mr_1 {
    top: 1.5rem;
    left: -47px;
  }

  .mr_2 {
    top: -8px;
    right: -47px;
  }

  .papaya_1 {
    top: 1rem;
    left: 1rem;
    height: 80px;
  }

  .codehub_1 {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);
    width: 140px;
  }

  .elliptic_1 {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ranges_1 {
    top: 50%;
    left: 50%;
  }

  .parrot_1 {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);
    width: 12.5rem;
  }
`
