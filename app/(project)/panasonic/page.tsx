import Footer from "@/components/footer";
import ImageSection from "../components/ImageSection";
import VideoSection from "../components/VideoSection";
import panasonic1 from "@/public/img/panasonic-1.jpg";
import panasonic2 from "@/public/img/panasonic-2.jpg";
import panasonic3 from "@/public/img/panasonic-3.png";
import Image from "next/image";

export default function PanasonicPage() {
  return (
    <>
      <header>
        <h1>
          Reduced cognitive load within Panasonic search,{" "}
          <span>increased number of sales</span> through site
        </h1>
      </header>
      <ImageSection caption="An example of how cluttered and unintuitive parametric searches can be">
        <Image
          fill
          placeholder="blur"
          src={panasonic1}
          alt="An example of how cluttered and unintuitive parametric searches can be"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        While working on a new design system for Panasonic Industrial, I noticed
        a significant conversion drop-off when users engaged with their
        parametric search tool for electrical components. The existing
        experience loaded all products upfront and relied on cumbersome top
        filters, resulting in a slow and frustrating process.
      </p>
      <ImageSection caption="What a user first saw on the old search experience">
        <Image
          fill
          placeholder="blur"
          src={panasonic2}
          alt="What a user first saw on the old search experience"
        />
      </ImageSection>
      <h2>Definition of Problem</h2>
      <p>
        Through usability testing, I aimed to deeply understand the task models
        and needs of the professionals using this search tool to purchase very
        specific component types. My research identified the need to allow users
        to incrementally narrow options by selecting key categories before
        seeing any product data.
      </p>
      <ImageSection caption="The refined interface, visible only after explicit categories have been selected">
        <Image
          fill
          placeholder="blur"
          src={panasonic3}
          alt="The refined interface, visible only after explicit categories have been selected"
        />
      </ImageSection>
      <h2>Iteration to Solution</h2>
      <p>
        I iterated on redesigning the parametric search flow to be both simple
        and powerful. The new experience guided users through an intuitive
        multi-step journey to systematically filter down to their desired
        component type and specifications. This incremental revelation of only
        relevant product options made navigating to the right part numbers
        vastly more efficient compared to the previous bloated &quot;full
        catalog&quot; approach.
      </p>
      <VideoSection
        src="/img/panasonic-4.mp4"
        caption="The new interaction, from initial search to stock check"
      />
      <h2>Impact</h2>
      <p>
        My streamlined component search solution, combined with a fully
        responsive design, generated impressive results:{" "}
      </p>
      <ul>
        <li>Drastically reduced support calls about search usability</li>
        <li>Increased sales leads from the website</li>
        <li>
          Created a differentiated user experience raising Panasonic&apos;s
          product discoverability over competitors
        </li>
      </ul>
      <p>
        By aligning the search with users&apos; actual workflows, I turned a
        conversion bottleneck into a sales acceleration tool demonstrating
        substantial business impact.
      </p>
      <Footer next="/ethvault" />
    </>
  );
}
