import { AnimationProvider } from '@/context/animations'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimationProvider>
      <Component {...pageProps} />
      <Analytics />
    </AnimationProvider>
  )
}
