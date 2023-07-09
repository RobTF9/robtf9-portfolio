import Breadcrumbs from '@/components/breadcrumbs'
import Card from '@/components/card'
import Layout from '@/components/layout'
import Project, { ProjectImage } from '@/components/project'
import Head from 'next/head'

export default function Ranges() {
  return (
    <>
      <Head>
        <title>ranges.io | Robert Squires</title>
      </Head>
      <Layout>
        <Breadcrumbs title="ranges.io" />
        <Card
          className="main"
          noEvents
          project="ranges"
          images={[{ src: '/ranges.svg', fill: true }]}
          copy={[]}
        />
        <Project
          headlines={[
            'Designing the next generation ',
            'of cyber security training',
          ]}
        >
          <p>
            Cybersecurity tournaments and competitions, commonly referred to as
            Capture the Flags (CTFs), serve as essential proving grounds for
            practitioners of all levels. However, the fragmented nature of
            existing CTF platforms, with their diverse infrastructures,
            networks, and virtual machines, poses numerous challenges and high
            costs.
          </p>
          <q>
            Within 18 months of its launch, ranges.io was acquired by the SANS
            Institute
          </q>
          <p>
            To address these issues, ranges.io was developed as the first
            persistent, multi-tenant capture the flag platform, automating many
            time-consuming and expensive operations. Within 18 months of its
            launch, ranges.io was acquired by the SANS Institute. As the design
            lead during the transition period, I successfully facilitated full
            adoption of the platform throughout the entire SANS author community
            leading to a 75% reduction in operational costs.
          </p>
          <q>
            Facilitated full adoption, leading to a 75% reduction in operational
            costs
          </q>
          <p>
            One of the key challenges faced by ranges.io during the transition
            period was accommodating the varied processes, approaches, and
            technical abilities of SANS’ content creators, known as authors
            (hackers turned teachers). To gain insights into the content
            creation process, I conducted extensive field research by working
            closely with a variety of authors. This research allowed me to
            understand their perspectives, thought processes, and content
            development methodologies.
          </p>
          <ProjectImage
            img="/combined-task-models.jpg"
            text="Task models observed during field research"
          />
          <p>
            Based on the research findings, it became clear that some authors
            preferred to work without a graphical user interface (GUI) as part
            of their content creation process. For these authors, we developed
            an API and trigger system, enabling them to manage their content
            using their existing tools and infrastructure while still utilising
            the ranges.io platform for content delivery.
          </p>
          <q>
            The average number of test events created per package dropped from 4
            to 1
          </q>
          <p>
            On the other hand, authors with less technical proficiency required
            a GUI for editing their content packages. Currently, they relied on
            a mix of tools and programs such as Word, Notion, and OneNote.
            However, the problem with this approach, as well as the initial
            implementation of the package authoring tool, was the lack of
            alignment with the player&apos;s perspective. To address this, I
            focused on creating prototypes that allowed authors to edit their
            content while visualising the player&apos;s experience
            simultaneously. This approach facilitated instant feedback loops for
            authors, enhancing the editing process.
          </p>
          <ProjectImage
            text="Initial, form based authoring experience"
            img="/ranges-form-based.jpg"
          />
          <ProjectImage
            text="Early iteration, with a side by side preview"
            img="/ranges-preview.jpg"
          />
          <p>
            To fully integrate the authoring experience, we eliminated the
            separation between preview and editor. Instead, we implemented
            controls that enabled authors to edit the package within the same
            context in which it would be presented to the player. Careful
            attention was given to clearly distinguish authoring controls from
            player-visible elements, ensuring a seamless and intuitive
            experience.
          </p>
          <ProjectImage
            text="The preview mode for the new authoring experience"
            img="/ranges-player.jpg"
          />
          <ProjectImage
            text="The authoring mode, author controls have dashed border"
            img="/ranges-inline.jpg"
          />
          <p>
            The introduction of the integrated authoring experience aimed to
            reduce the number of testing rounds required before publishing a
            content package. The hypothesis was that authors would benefit from
            seeing their content in context, resulting in fewer iterations of
            testing. The results proved the hypothesis to be correct, as the
            average number of test events created per package dropped from 4 to
            1. This streamlined the content creation process and increased
            efficiency and also saw mass adoption of the user interface from
            authors we’d previously identified as being unlikely to use the GUI.
          </p>
        </Project>
      </Layout>
    </>
  )
}
