import { Alegreya as Font } from 'next/font/google'
import { ReactNode } from 'react'
import { Outer, Wrapper, Container } from './styles'
import { useAnimationContext } from '@/context/animations'

const font = Font({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
})

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const { active } = useAnimationContext()

  return (
    <Container className={font.className}>
      <Outer animate={active}>
        <Wrapper>{children}</Wrapper>
      </Outer>
      <h2>Get in touch...</h2>
      <footer>
        <p>
          Let&apos;s connect on{' '}
          <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a> or{' '}
          <a href="https://github.com/RobTF9">GitHub</a>!
        </p>
      </footer>
    </Container>
  )
}
