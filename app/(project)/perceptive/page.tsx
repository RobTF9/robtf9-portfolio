import ImageSection from "../components/ImageSection";
import perceptive1 from "@/public/img/perceptive-1.png";
import perceptive2 from "@/public/img/perceptive-3.png";
import perceptive3 from "@/public/img/perceptive-2.png";
import Footer from "@/components/footer";
import Image from "next/image";

export default function PerceptivePage() {
  return (
    <>
      <header>
        <h1>
          Using language models to{" "}
          <span>improve application security culture</span>, raised pre-seed
          funding, designed and engineered initial product
        </h1>
      </header>
      <ImageSection
        caption={
          <>
            How Perceptive works in a nutshell, connect on{" "}
            <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a> if
            you&apos;d like a demo!
          </>
        }
      >
        <Image
          src={perceptive1}
          alt="Perceptive workflow"
          fill
          placeholder="blur"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        During a research project to identify large untapped markets and user
        groups adjacent to cybersecurity. I quickly gravitated towards software
        engineers and application developers, who bear an immense but often
        deprioritized security burden.
      </p>
      <ImageSection caption="Observed models of different software development lifecycles and where security is considered">
        <Image
          fill
          placeholder="blur"
          src={perceptive2}
          alt="Observed models of different software development lifecycles and where security is considered"
        />
      </ImageSection>
      <h2>Definition of Problem</h2>
      <p>
        Through over 30 interviews and task modeling sessions across engineering
        roles (developers, product managers, infosec), I uncovered key
        painpoints and blockers preventing adoption of secure coding practices:
      </p>
      <ul>
        <li>Engineers lack guidance on what security issues to watch for</li>
        <li>Competing priorities make security a lower focus day-to-day</li>
        <li>
          Product managers asked to involve infosec earlier but unsure of
          optimal timing
        </li>
        <li>
          Infosec teams need visibility into different project plans to allocate
          limited resources
        </li>
      </ul>

      <h2>Iteration to Solution</h2>
      <p>
        I rapidly prototyped different concepts for injecting security guidance
        as early as possible in the software development lifecycle. The approach
        I landed on was leveraging LLMs fine tuned on AWS Bedrock with
        cybersecurity professionals to analyze new development tickets and
        surface relevant security implications during the planning phase itself.
      </p>
      <ImageSection caption="The benefits of considering security, early">
        <Image
          fill
          placeholder="blur"
          src={perceptive3}
          alt="The benefits of considering security, early"
        />
      </ImageSection>
      <h2>Impact</h2>
      <p>
        Launching in April 2024, Perceptive aims to foster an improved
        application security culture within engineering teams by providing:
      </p>
      <ul>
        <li>
          Timely, contextualized security insights integrated into existing
          workflows
        </li>
        <li>
          Automated prioritization of security risks directly mapped to project
          plans
        </li>
        <li>
          Enablement for product managers to collaborate with infosec earlier
        </li>
        <li>
          A unified view across teams for infosec to prioritize resources
          effectively
        </li>
      </ul>
      <p>
        By bridging the disconnect between engineering processes and application
        security needs, Perceptive&apos;s solutions could drive widespread
        adoption of secure coding best practices.
      </p>
      <p>(Will provide update on measured impacts post-launch)</p>
      <Footer next="/ranges" />
    </>
  );
}
