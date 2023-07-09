import Head from 'next/head'
import Nav from '@/components/nav'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Grid from '@/components/grid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Robert Squires</title>
        <meta
          name="description"
          content="A collection of work and side projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Nav />
        <Header />
        <Grid title="Proud of...">
          <>
            <Card
              className="main"
              project="ranges"
              images={[{ src: '/ranges.svg', fill: true }]}
              copy={[
                'Designing the first multi-tenant capture the flag platform,',
                'enabling the next generation of cyber security training',
              ]}
            />
            <Card
              project="elliptic"
              images={[]}
              copy={[
                'Leading design and research on the worlds',
                'first cross-blockchain tracing tool',
              ]}
            />
            <Card
              project="parrot"
              images={[{ src: '/parrot.svg', width: 140, height: 177 }]}
              copy={[
                'Building a browser based tool for',
                'learning new languages',
              ]}
            />
          </>
        </Grid>
        <Grid title="Currently...">
          <>
            <Card
              images={[
                { width: 287, height: 323, src: '/mr-1.png' },
                { width: 208, height: 520, src: '/mr-2.png' },
              ]}
              project="mr"
              copy={[
                'Prototyping services to reduce',
                'application security risk',
              ]}
            />
            <Card
              project="codehub"
              images={[{ src: '/codehub.png', width: 140, height: 177 }]}
              copy={[
                'Mentor to aspiring designers',
                'and developers at CodeHub',
              ]}
            />
          </>
        </Grid>
      </Layout>
    </>
  )
}
