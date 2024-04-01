import Footer from "@/components/footer";
import ImageSection from "../components/ImageSection";
import ranges1 from "@/public/img/ranges-1.jpg";
import ranges2 from "@/public/img/ranges-2.jpg";
import ranges3 from "@/public/img/ranges-3.jpg";
import ranges4 from "@/public/img/ranges-4.jpg";
import ranges5 from "@/public/img/ranges-5.jpg";
import ranges6 from "@/public/img/ranges-6.jpg";
import Image from "next/image";

export default function RangesPage() {
  return (
    <>
      <header>
        <h1>
          Enabled the next generation of cybersecurity training,{" "}
          <span>saved $34.5 million a year</span> in operational costs
        </h1>
      </header>
      <ImageSection caption="Typical setting for a Ranges.io competition, CyberThreat 2023, sponsored by NCSC">
        <Image
          fill
          placeholder="blur"
          src={ranges1}
          alt="Typical setting for a Ranges.io competition, CyberThreat 2023, sponsored by NCSC"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        When I joined Ranges.io (formerly Tomahawque) as the first product
        designer, the platform focused on creating exciting capture-the-flag
        experiences for players. However, field research and user tests
        observing players in live events found they spent little time in the
        actual application. The main users were authors creating event content.
        Their key issue was needing to fully build and test events themselves,
        wasting months per event.
      </p>
      <ImageSection caption="Diagrams created of various authoring workflows during research">
        <Image
          fill
          placeholder="blur"
          src={ranges2}
          alt="Diagrams created of various authoring workflows during research"
        />
      </ImageSection>
      <h2>Definition of Problem</h2>
      <p>
        During a task modelling research project to understand the workflow of
        authors, one of the key issues identified was that they relied on an
        event editor completely separate from the player view. The impact of
        this was having to actually to deploy a full instance of an event to
        understand what a player would see. The inefficient process stifled
        content production. I identified the editor as a major bottleneck
        limiting the platform&apos;s potential.
      </p>
      <ImageSection caption="The initial form based authoring experience">
        <Image
          src={ranges3}
          alt="The initial form based authoring experience"
          placeholder="blur"
          fill
        />
      </ImageSection>
      <h2>Iteration to Solution</h2>
      <p>
        I led design engineering on an editable layer placed over the player
        view. This let authors switch between their authoring controls and the
        experience the player would have instantly. In parallel to this
        interface focused project we also introduced an extensible trigger
        system which opened up new progression pathways and external system
        interactions for authors to create engaging content with. Overall my
        solution cut average testing time down to just 2 weeks per event.
      </p>

      <ImageSection caption="An early prototype with the editor and preview side by side">
        <Image
          src={ranges4}
          alt="An early prototype with the editor and preview side by side"
          fill
          placeholder="blur"
        />
      </ImageSection>
      <ImageSection caption="The preview mode for the new authoring experience">
        <Image
          src={ranges5}
          alt="The preview mode for the new authoring experience"
          fill
          placeholder="blur"
        />
      </ImageSection>
      <ImageSection caption="The editor mode, author only interactions are distinguised with dashed borders">
        <Image
          src={ranges6}
          alt="The editor mode, author only interactions are distinguised with dashed borders"
          fill
          placeholder="blur"
        />
      </ImageSection>
      <h2>Impact</h2>
      <p>
        My improvements drove an 18-month acquisition by SANS Institute, the
        world&apos;s leading cybersecurity training provider. My editor enabled
        SANS authors to migrate their training content to the platform, saving
        $34.5M annually in operational costs while accelerating author
        productivity in the process.
      </p>
      <Footer next="/elliptic" />
    </>
  );
}
