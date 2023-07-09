import Breadcrumbs from '@/components/breadcrumbs'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Project from '@/components/project'
import Head from 'next/head'
import Image from 'next/image'

export default function Threat() {
  return (
    <>
      <Head>
        <title>Magnetic Rock | Robert Squires</title>
      </Head>
      <Layout>
        <Breadcrumbs title="Magnetic Rock" />
        <Card
          className="main"
          noEvents
          images={[
            { width: 287, height: 323, src: '/mr-1.png' },
            { width: 208, height: 520, src: '/mr-2.png' },
          ]}
          project="mr"
          copy={[]}
        />
        <Project
          headlines={[
            'Prototyping services to reduce',
            'application security risk',
          ]}
        >
          <p>
            This project focused on identifying individuals, groups or
            organisations that have a responsibility for security without it
            being their day job. Early exploration led to software engineers and
            product engineering organisations. They represent a wide addressable
            market with a responsibility to ensure the applications and products
            they ship are secure.
          </p>
          <p>
            I can’t go into too many details about this project at the moment,
            but I can say it has seen me undertake the following activities:
          </p>
          <ul>
            <li>
              Planning and facilitating generative interviews with ~30
              participants across different roles within product engineering
              organisations.
            </li>
            <li>
              Lead a team of designers, product managers and engineers through a
              rapid discovery and design sprint process.
            </li>
            <li>
              Running empathy mapping and task modelling workshops to identify
              common patterns and opportunities for improved application
              security posture.
            </li>
            <li>
              Full stack prototyping with Python and TypeScript, building APIs
              and microservices that interact with Large Language Models (Open
              AI, Anthropic).
            </li>
          </ul>
          <section>
            <em>
              <h3>Task models...</h3>
            </em>
            <Image alt="Task model" src="/task-model-1.jpg" fill />
            <Image alt="Task model" src="/task-model-2.jpg" fill />
            <Image alt="Task model" src="/task-model-3.jpg" fill />
            <Image alt="Task model" src="/task-model-4.jpg" fill />
          </section>
          <em>
            <h3>Try the AI...</h3>
          </em>
        </Project>
      </Layout>
    </>
  )
}
