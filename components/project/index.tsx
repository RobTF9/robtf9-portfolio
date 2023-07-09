import { ReactNode } from 'react'
import { ProjectImageWrapper, ProjectWrapper } from './styles'
import Image from 'next/image'

interface Props {
  children: ReactNode[] | ReactNode
  headlines: string[]
}

const Project = ({ children, headlines }: Props) => {
  return (
    <ProjectWrapper>
      <header>
        <h1>
          {headlines.map((h) => (
            <span key={h}>{h} </span>
          ))}
        </h1>
      </header>
      {children}
    </ProjectWrapper>
  )
}

interface ImageProps {
  img: string
  text: string
}

export const ProjectImage = ({ img, text }: ImageProps) => {
  return (
    <ProjectImageWrapper>
      <Image fill src={img} alt={text} />
      <em>{text}</em>
    </ProjectImageWrapper>
  )
}

interface VideoProps {
  video: string
  text: string
}

export const ProjectVideo = ({ video, text }: VideoProps) => {
  return (
    <ProjectImageWrapper>
      <video controls>
        <source src="/parrot.m4v" type="video/mp4"></source>
      </video>
      <em>{text}</em>
    </ProjectImageWrapper>
  )
}

export default Project
