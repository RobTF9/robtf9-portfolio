import ImageSection from "../components/ImageSection";
import elliptc1 from "@/public/img/elliptic-1.jpg";
import elliptc2 from "@/public/img/elliptic-2.jpg";
import elliptc3 from "@/public/img/elliptic-3.png";
import elliptc4 from "@/public/img/elliptic-4.jpg";
import Footer from "@/components/footer";
import Image from "next/image";

export default function EllipticPage() {
  return (
    <>
      <header>
        <h1>
          Designed the first cross-blockchain tracing tool,{" "}
          <span>reduced AML investigation duration by 75%</span>
        </h1>
      </header>
      <ImageSection caption="The old journey, across 4 seperate apps, needed to investigate a suspicious wallet">
        <Image
          fill
          placeholder="blur"
          src={elliptc1}
          alt="The old journey, across 4 seperate apps, needed to investigate a suspicious wallet"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        At Elliptic, a blockchain intelligence company, I worked on the
        groundbreaking &quot;Holistic&quot; initiative - enabling users to view
        fund movements across different blockchain networks, an industry first.
        However, this powerful new capability risked highlighting inefficiencies
        in the existing user experience, which required using up to 4 separate
        tools for certain investigations.
      </p>
      <h2>Definition of Problem</h2>
      <p>
        Elliptic&apos;s core user base included compliance teams, AML analysts,
        and investigators from enterprise organizations. Through research
        interviews and persona workshops, I found their key priorities were
        understanding timing of events and resolving cases as quickly as
        possible to minimize costs. The Holistic feature threatened to surface
        more complex cases that would be theoretically harder to investigate
        efficiently with the current toolset. Addressing this data requirement
        meant an extensive API refactor - a major undertaking.
      </p>
      <ImageSection caption="An early information architecture artefact to refine the new data structure">
        <Image
          alt="An early information architecture artefact to refine the new data structure"
          fill
          placeholder="blur"
          src={elliptc2}
        />
      </ImageSection>
      <h2>Iteration to Solution</h2>
      <p>
        To provide clarity upfront, I conducted an information architecture
        project detailing exactly where additional data was needed throughout
        the user journey to optimize efficiency with Holistic&apos;s expanded
        capabilities. This guided refining the product experience to give users
        visual timelines and diagrams of when events occurred. With all
        contextual information in one place, users had what they needed to
        rapidly file reports.
      </p>
      <ImageSection caption="A refined version of the information architecture diagram">
        <Image
          fill
          placeholder="blur"
          alt="A refined version of the information architecture diagram"
          src={elliptc3}
        />
      </ImageSection>
      <ImageSection caption="The final version of the app, allowing a full investigation in a single product">
        <Image
          fill
          placeholder="blur"
          src={elliptc4}
          alt="The final version of the app, allowing a full investigation in a single product"
        ></Image>
      </ImageSection>
      <h2>Impact</h2>
      <p>
        The streamlined Holistic experience reduced the average time for
        transitioning alerts from &quot;open&quot; to &quot;closed&quot; by 75%.
        Its usability improvements also drove a 40% increase in government
        sector wins, as the tool enabled adoption by law enforcement not
        extensively trained in blockchain analysis. Overall, this initiative
        successfully democratized powerful cross-chain tracing abilities in a
        workflow-optimized package tailored to enterprise compliance use cases.
      </p>
      <Footer next="/rac" />
    </>
  );
}
