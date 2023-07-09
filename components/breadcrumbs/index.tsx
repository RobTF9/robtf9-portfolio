import Link from 'next/link'
import { BreadcrumbWrapper } from './styles'

interface Props {
  title: string
}

const Breadcrumbs = ({ title }: Props) => {
  return (
    <BreadcrumbWrapper>
      <Link href={'/'}>Robert Squires</Link>
      <span>/</span>
      <p>{title}</p>
    </BreadcrumbWrapper>
  )
}

export default Breadcrumbs
