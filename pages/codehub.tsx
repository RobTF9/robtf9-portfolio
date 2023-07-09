import Breadcrumbs from '@/components/breadcrumbs'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Project, { ProjectImage } from '@/components/project'
import Head from 'next/head'

export default function CodeHub() {
  return (
    <>
      <Head>
        <title>CodeHub | Robert Squires</title>
      </Head>
      <Layout>
        <Breadcrumbs title="CodeHub" />
        <Card
          className="main"
          noEvents
          project="codehub-hero"
          images={[{ src: '/codehub-hero.png', fill: true }]}
          copy={[]}
        />
        <Project
          headlines={[
            'Mentor to aspiring designers',
            'and developers at CodeHub',
          ]}
        >
          <p>
            At CodeHub, I joined as a mentor and conducted workshops covering a
            wide range of topics, from functional programming in TypeScript to
            organising research repositories. One of the most successful
            workshops I facilitated was centred around designing and building a
            content API and front-end for Bristol Tech Fair, a platform aimed at
            providing educational resources about STEM subjects for children.
            Throughout the project, my role involved management and mentoring
            for all the collaborators involved.
          </p>
          <q>
            Mentored 18 developers and 1 designer through an end to end web
            development project. All now in full time employment and used this
            project during their interview process.
          </q>
          <p>
            The designer on the team had recently completed a UX bootcamp and
            had strong illustration skills. To optimise her skillset for
            collaborative design team environments, we focused on addressing the
            gaps in her knowledge. We adopted a structured approach, emphasising
            component-driven design principles. Working together, we
            deconstructed her initial mock-ups to help her grasp proper UI
            structuring and componentization. Additionally, she led the creation
            of a design system with my guidance.
          </p>
          <a
            className="figma"
            href="https://www.figma.com/file/gGwSe7ilZCUmAIaJyUc4iY/Bristol-Tech-Fair--Design-System?type=design&node-id=489%3A43&mode=design&t=GCa1flORKmgnNdaK-1"
          >
            <span /> Open Figma Project
          </a>
          <ProjectImage img="/codehub-char.png" text="The BTF mascot" />
          <p>
            I also led the engineering effort, one thing I’d observed from my
            time mentoring people looking to get in to the industry is a lack of
            work on codebases multiple engineers are contributing to. This means
            the first time someone experiences a proper testing suite and CI
            pipeline is on the job.
          </p>
          <p>
            For the back-end, we utilized Node.js with Express and MongoDB to
            create a robust REST API. On the front-end, we leveraged React along
            with Storybook, enabling engineers to seamlessly translate the
            component-driven Figma design into code. To ensure adherence to best
            practices and facilitate a realistic production codebase experience,
            both repositories employed strict linting rules combined with Git
            hooks.
          </p>
          <a className="github" href="https://github.com/bristol-tech-fair">
            <span /> Open Github Organization
          </a>
          <p>
            <strong>Outcome</strong>While the Bristol Tech Fair project was not
            released to the public, the primary objective of this endeavour was
            not the launch itself but rather the learning and growth it
            facilitated. Out of the 19 participants involved, all of them have
            successfully transitioned into full-time employment. Although
            individual brilliance played a significant role in their
            achievements, each participant cited the Bristol Tech Fair project
            as a standout example during their interview process.
          </p>
          <ol>
            <p>
              <strong>Lessons learned</strong>
            </p>
            <li>
              Adjusting linting Rules: In hindsight, it would have been
              beneficial to adopt a slightly less strict linting configuration.
              The abundance of red error messages proved overwhelming for some
              beginners, potentially hindering their learning experience.
            </li>
            <li>
              Dockerization for Simplified Setup: To mitigate issues encountered
              during local setup, Dockerizing the project would have been
              advantageous. This would have provided a standardised and
              simplified environment for all contributors.
            </li>
            <li>
              Leveraging Third-Party Services: While the project&apos;s
              objective did not solely focus on achieving a live deployment,
              incorporating more third-party services could have expedited the
              development process. This would have allowed us to showcase a live
              version of the project, further enhancing the learning experience.
            </li>
          </ol>
        </Project>
      </Layout>
    </>
  )
}
