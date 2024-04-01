import Footer from "@/components/footer";
import ImageSection from "../components/ImageSection";
import VideoSection from "../components/VideoSection";
import oc1 from "@/public/img/oc-1.jpg";
import oc2 from "@/public/img/oc-2.png";
import oc3 from "@/public/img/oc-3.png";
import oc4 from "@/public/img/oc-4.png";
import Link from "next/link";

export default function OcPage() {
  return (
    <>
      <header>
        <h1>
          Lead creation of a new <span>design system</span>
        </h1>
      </header>
      <ImageSection
        src={oc1}
        caption="Illustration system to accompany articles"
      />
      <h2>Identification of Opportunity</h2>
      <p>
        At Osborne Clarke, repetitive tasks around interface components were
        causing inefficiencies and time wasted on mundane elements across their
        website ecosystem. An opportunity emerged to standardize design and
        development workflows through a cohesive design system.
      </p>
      <ImageSection src={oc2} caption="Responsive typography system" />
      <h2>Definition of Problem</h2>
      <p>
        My research identified key areas the existing website experience
        struggled with - a lack of engaging visuals to effectively market
        services across varied sectors, static content presentations that failed
        to bring information to life, and a lack of responsive typography
        optimized for the many users visiting on mobile phones. A robust design
        system could solve these issues while simultaneously reducing rework for
        developers.
      </p>
      <ImageSection src={oc3} caption="Mobile views of the site" />
      <ImageSection
        src={oc4}
        caption="Desktop view of the 'Insights' homepage"
      />
      <h2>Iteration to Solution</h2>
      <p>
        I led the ideation and proposal for Osborne Clarke&apos;s design system.
        Central to my vision was an engaging illustration system that could
        flexibly visualize concepts for different practice areas and industries.
        The system also pioneered interactive content components that
        transformed dry informational modules into intuitive, animated
        experiences. Additionally, I introduced a responsive typography scale to
        ensure heading hierarchies and body text remained readable and
        accessible across all device sizes, especially phones.
      </p>
      <VideoSection
        src="/img/oc-5.mp4"
        caption="Interaction for the 'Sectors landing page'"
      />
      <h2>Impact</h2>
      <p>Implementing this design system provided a dual impact:</p>
      <ul>
        <li>
          It gave the Osborne Clarke brand a refreshed, dynamic, and
          differentiated visual identity perfectly suited to simplify marketing
          efforts across verticals.
        </li>
        <li>
          Standardized reusable components, content models, and responsive
          typography substantially reduced frontend development time by
          minimizing rework on common UI patterns.
        </li>
      </ul>
      <p>
        Overall, this system boosted brand cohesion, engagement, and mobile
        usability while unlocking significant time savings. My approach balanced
        top-line marketing needs with bottom-line development efficiencies.
      </p>
      <Footer next="/perceptive" />
    </>
  );
}
