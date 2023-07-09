import Breadcrumbs from '@/components/breadcrumbs'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Project, { ProjectImage } from '@/components/project'
import Head from 'next/head'

export default function Elliptic() {
  return (
    <>
      <Head>
        <title>Elliptic | Robert Squires</title>
      </Head>
      <Layout>
        <Breadcrumbs title="Elliptic" />
        <Card
          className="main"
          noEvents
          project="elliptic"
          images={[]}
          copy={[]}
        />
        <Project
          headlines={[
            'Leading design and research on the worlds first cross-blockchain tracing tool',
          ]}
        >
          <p>
            Money laundering on blockchains is harder than people think, there’s
            a record of every transaction that took place on each network. A
            common typology illicit actors employ is to move their assets
            between different networks using bridges or swap services. This used
            to make it hard to trace as the trail went cold once the assets
            jumped to the next blockchain.
          </p>
          <q>
            Investigations that used to take several days could now be conducted
            in a single click
          </q>
          <p>
            During my time at Elliptic I lead design and research on the
            holistic screening and investigation project, this was a key
            initiative for the business and gave them a new USP. Holistic
            allowed users to trace illicit actors movement across different
            networks and asset classes. It also introduced a number of
            efficiency optimisations that meant investigations that took several
            days are now complete with a single click.
          </p>
          <p>
            I’m unable to write more about this project but happy to talk about
            it in person. If you’d like to learn more read the product pages for
            Holistic{' '}
            <a href="https://www.elliptic.co/solutions/crypto-investigations">
              Investigator
            </a>{' '}
            and <a href="https://www.elliptic.co/holistic">Screening</a>.
          </p>
          <ProjectImage
            img="/elliptic-promo.png"
            text="Promo shot of Investigator"
          />
        </Project>
      </Layout>
    </>
  )
}
