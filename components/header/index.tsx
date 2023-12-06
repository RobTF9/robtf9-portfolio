import { useAnimationContext } from '@/context/animations'
import { HeaderWrapper } from './styles'

export default function Header() {
  const { active } = useAnimationContext()

  return (
    <HeaderWrapper animate={active}>
      <h1>Robert Squires</h1>
      <p>
        <span>Helping companies build better tools and products, </span>
        <span>
          solving complicated problems with design, research and tech,{' '}
        </span>
        <span>curiously making the internet a better place for 10 years.</span>
      </p>
    </HeaderWrapper>
  )
}
