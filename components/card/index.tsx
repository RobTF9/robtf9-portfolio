import Image from 'next/image'
import { GridCard } from './styles'

type Img = { width?: number; height?: number; fill?: true; src: string }
interface Props {
  images: Img[]
  project: string
  copy: string[]
  className?: string
  noEvents?: true
}

export default function Card({
  images,
  project,
  copy,
  className,
  noEvents,
}: Props) {
  return (
    <GridCard
      href={`/${project}`}
      className={`${project} ${className}`}
      noEvents={noEvents}
    >
      {images.map(({ width, height, fill, src }, i) => (
        <Image
          key={i}
          alt=""
          width={width}
          height={height}
          fill={!!fill}
          className={`${project}_${i + 1}`}
          src={src}
        />
      ))}
      <p>
        {copy.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </p>
    </GridCard>
  )
}
