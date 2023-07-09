import styled from 'styled-components'

export const BreadcrumbWrapper = styled.div`
  position: absolute;
  z-index: 100;
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;

  a {
    opacity: 0.8;
  }

  p {
    font-weight: bold;
  }
`
