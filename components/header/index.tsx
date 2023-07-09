import { useAnimationContext } from '@/context/animations'
import { HeaderWrapper } from './styles'

export default function Header() {
  const { active } = useAnimationContext()

  return (
    <HeaderWrapper animate={active}>
      <h1>Robert Squires</h1>
      <p>
        <span>Experienced design, research and technology practitioner, </span>
        <span>curiously building unprecedented tools and products, </span>
        <span>passionate about making the internet a better place.</span>
      </p>
    </HeaderWrapper>
  )
}
