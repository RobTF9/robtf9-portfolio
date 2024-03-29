import ImageSection from "../components/ImageSection";
import perceptive1 from "@/public/img/perceptive-1.png";
import perceptive2 from "@/public/img/perceptive-3.png";
import perceptive3 from "@/public/img/perceptive-2.png";
import Link from "next/link";

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
        src={perceptive1}
        caption={
          <>
            How Perceptive works in a nutshell, connect on{" "}
            <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a> if
            you&apos;d like a demo!
          </>
        }
      />
      <h2>Identification of Opportunity</h2>
      <p>
        When rejoining Magnetic Rock, I was tasked with pinpointing large,
        untapped markets and user groups with significant cybersecurity
        responsibilities. I quickly gravitated towards software engineers and
        application developers, who bear an immense but often deprioritized
        security burden.
      </p>
      <ImageSection
        src={perceptive2}
        caption="Observed models of different software development lifecycles and where security is considered"
      />
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
          Product managers want earlier infosec involvement but don&apos;t know
          optimal timing
        </li>
        <li>
          Infosec teams need visibility into different project plans to allocate
          limited resources
        </li>
      </ul>

      <h2>Iteration to Solution</h2>
      <p>
        After being made redundant, I partnered with Perceptive&apos;s CEO to
        explore potential solutions using the research insights. We rapidly
        prototyped injecting security guidance as early as possible in the
        software development lifecycle. Our approach landed on leveraging LLMs
        fine tuned on AWS Bedrock with cybersecurity professionals to analyze
        new development tickets and surface relevant security implications
        during the planning phase itself.
      </p>
      <ImageSection
        src={perceptive3}
        caption="The benefits of considering security, early"
      />
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
      <Link href="/ranges">Next Project</Link>
    </>
  );
}
