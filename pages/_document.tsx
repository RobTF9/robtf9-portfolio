import StyledComponentsRegistry from '@/lib/registry'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <StyledComponentsRegistry>
        <body>
          <Main />
          <NextScript />
        </body>
      </StyledComponentsRegistry>
    </Html>
  )
}
