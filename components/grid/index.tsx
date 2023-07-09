import { ReactNode } from 'react'
import { GridWrapper } from './styles'
import { useAnimationContext } from '@/context/animations'

interface Props {
  title: string
  children: ReactNode
}

export default function Grid({ title, children }: Props) {
  const { active } = useAnimationContext()

  return (
    <GridWrapper animate={active}>
      <h2>{title}</h2>
      {children}
    </GridWrapper>
  )
}
