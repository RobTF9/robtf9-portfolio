import Breadcrumbs from '@/components/breadcrumbs'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Project, { ProjectVideo } from '@/components/project'
import Head from 'next/head'

export default function Parrot() {
  return (
    <>
      <Head>
        <title>Parrot | Robert Squires</title>
      </Head>
      <Layout>
        <Breadcrumbs title="Parrot" />
        <Card
          className="main"
          noEvents
          project="parrot"
          images={[{ src: '/parrot.svg', width: 140, height: 177 }]}
          copy={[]}
        />
        <Project
          headlines={[
            'Building a browser based tool for',
            'learning new languages',
          ]}
        >
          <div className="flex">
            <a className="parrot" href="https://parrot.onrender.com">
              <span /> Try Parrot
            </a>
            <a className="github" href="https://github.com/RobTF9/parrot">
              <span /> View source code
            </a>
          </div>
          <p>
            This project started as an experiment to discover if web
            technologies could be used to create an effective platform for
            language learning. I worked closely with language tutors and
            students to design and build an initial prototype application with
            which students are able to record phrases they&apos;ve learnt, and
            be tested on them through interactive exercises.
          </p>
          <q>Increase in daily active users, from 9 to 52</q>
          <p>
            The initial version was a utilitarian, minimal, and form-focused
            interface which many users found difficult to comprehend and engage
            with. After several months of qualitative research through user
            interviews and feedback, I pivoted the application to be centred
            around a virtual Parrot character that users teach new words and
            phrases to. Although functionally the same at its core, this design
            decision made the application&apos;s functionality feel less
            abstract and easier to learn for many users. This change resulting
            in an increase in daily active users, 9 to 52.
          </p>
          <ProjectVideo text="Teaching my parrot a phrase" video="" />
          <p>
            Currently, the application is in an open beta testing phase, and I’m
            collecting data and analytics on a number of key research topics
            that will drive the next phase of the product&apos;s development.
            The goal is to refine the user experience, improve the curriculum
            and progression, and optimize the speech recognition and tracking of
            a user&apos;s language learning progress over time.
          </p>
        </Project>
      </Layout>
    </>
  )
}
