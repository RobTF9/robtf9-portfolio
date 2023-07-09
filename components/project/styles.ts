import styled from 'styled-components'

export const ProjectWrapper = styled.div`
  position: relative;
  z-index: 100;
  padding: 0 2rem 10rem;
  margin-top: -2.5rem;
  width: calc(720px + 4rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;

  img {
    position: relative !important;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 0 10rem 1rem;
    margin-top: -1.5rem;
    max-width: 100%;
  }

  h1 {
    font-size: 3rem;
    line-height: 3rem;

    span {
      display: block;
    }

    @media screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 2rem;

      span {
        display: inline;
      }
    }
  }

  p,
  li,
  em {
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 400;

    @media screen and (max-width: 490px) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  p,
  ul,
  .figma,
  q {
    display: block;
  }

  q {
    font-size: 2rem;
    padding: 0 3rem;
    border-left: 0.25rem solid var(--fg);
    quotes: none;
    color: var(--wt);

    @media screen and (max-width: 490px) {
      font-size: 1.5rem;
      margin: 2rem 0 2rem -2rem;
    }
  }

  ul,
  ol {
    position: relative;
    list-style-type: disc;
    padding: 0 0 0 2.5rem;

    p {
      position: relative;
      width: calc(100% + 2.5rem);
      margin-left: -2.5rem;
      margin-bottom: 1rem;
    }
  }

  ol {
    list-style-type: decimal;
  }

  .figma,
  .github {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 0.5rem 0.75rem;
    background-color: #2c2d33;
    width: fit-content;
    border-radius: 0.5rem;
    box-shadow: 0.25rem 0.25rem rgba(0, 0, 0, 0.6);
    color: var(--wt);

    span {
      background: url('/figma.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  .github {
    span {
      background: url('/github.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  p strong {
    display: block;
    color: var(--wt);
    font-style: italic;
    font-size: 2rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 490px) {
      font-size: 1.5rem;
    }
  }
`

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 960px;
  height: fit-content;
  padding-bottom: 3rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  img {
    position: relative;
    transform: translate(-2rem);

    @media screen and (max-width: 1000px) {
      transform: translate(-1rem);
    }
  }

  em {
    font-size: 2rem;

    line-height: 2rem;

    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 490px) {
      font-size: 1rem;
    }
  }
`
