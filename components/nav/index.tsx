import { useAnimationContext } from '@/context/animations'
import { Navigation } from './styles'
import Link from 'next/link'

export default function Nav() {
  const { active } = useAnimationContext()

  return (
    <Navigation animate={active}>
      <div>
        <Link href={'/'}>
          <span>RS</span>
        </Link>
      </div>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/RobTF9">GitHub</a>
        </li>
        <li>
          <a href="/rob-squires-cv.pdf">CV</a>
        </li>
      </ul>
    </Navigation>
  )
}
