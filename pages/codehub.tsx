import Breadcrumbs from '@/components/breadcrumbs'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Project from '@/components/project'
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
          project="codehub"
          images={[{ src: '/codehub.png', width: 140, height: 177 }]}
          copy={[]}
        />
        <Project
          headlines={[
            'Mentor to aspiring designers',
            'and developers at CodeHub',
          ]}
        >
          <p>
            I initially joined CodeHub just as a mentor and occasional wokrshop
            lead. The most succesful project I ran while there was the build
            (almost - explained later) of a content API and front end for
            Bristol Tech Fair, a knowledge source for children who want to learn
            more about STEM subjects.
          </p>
          <p>
            I mentored the designer responsible for UI/UX on that part of the
            project, she had started fresh out of a UX bootcamp. We focused the
            approach for this project around the gaps in her skillset, what she
            was missing was a rigourous approach to component design and no
            experience with usability testing.
          </p>
          <p>
            I introduced her to component driven design, and we collaborated on
            breaking apart some of her intial mock ups to help her understand
            how to properly structure and componetise UIs. She then led on the
            creation of a design system with guidance from me.
          </p>
          <a
            className="figma"
            href="https://www.figma.com/file/gGwSe7ilZCUmAIaJyUc4iY/Bristol-Tech-Fair--Design-System?type=design&node-id=489%3A43&mode=design&t=GCa1flORKmgnNdaK-1"
          >
            <span /> Open Figma Project
          </a>
          <p>
            I also led the engineering effort, one thing I’d observed from my
            time mentoring people looking to get in to the industry is a lack of
            work on codebases multiple engineers are contributing to. This means
            the first time someone experiences a proper testing suite and CI
            pipeline is on the job.
          </p>
          <p>
            I set up a repo for the content API that used Express.js and MongoDB
            to introduce the team to RESTful API design. And a frontend repo
            using React and Storybook so they could learn to best practice for
            building component driven UIs. Both repos had extremely strict
            linting combined with Git hooks to enforce best practice and teach
            them what contributing to a production codebase is like.
          </p>

          <a className="github" href="https://github.com/bristol-tech-fair">
            <span /> Open Github Organization
          </a>
          <section>
            <h2>What it achieved</h2>
            <p>
              Unfortunately this project was never released, fortunately that
              wasn’t the point! Of the 19 people who were involved, 19 are now
              in full time employment. Although I and this project can’t take
              full credit for the brilliance of the indivduals involved, all
              used Bristol Tech Fair as an example during their succesful
              interview process.
            </p>
            <h2>What I&apos;d do differently</h2>
            <ul>
              <li>
                <em>Slightly</em> less strict linting, lot’s of red errors
                became intimidating for some beginners!
              </li>
              <li>
                Dockerize the project, plenty of issues with local set up that
                could have been avoided.
              </li>
              <li>
                Use more 3rd party services to build faster, although this
                wasn’t theobjective would have been nice to get something live.
              </li>
            </ul>
          </section>
        </Project>
      </Layout>
    </>
  )
}
