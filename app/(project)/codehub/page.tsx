import ImageSection from "../components/ImageSection";
import codehub1 from "@/public/img/codehub-1.jpg";
import Footer from "@/components/footer";
import Image from "next/image";

export default function CodehubPage() {
  return (
    <>
      <header>
        <h1>
          Delivered workshops on collaborative development{" "}
          <span>got 16 designers and developers their first job</span>
        </h1>
      </header>
      <ImageSection caption="Workshop Wednesdays before the pandemic">
        <Image
          src={codehub1}
          placeholder="blur"
          fill
          alt="Workshop Wednesdays before the pandemic"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        During the COVID pandemic, coding groups Codehub and Women&apos;s Tech
        Hub transitioned to an online model but struggled with an inconsistent
        schedule and lack of compelling workshop ideas. Most attendees were
        aspiring developers and designers seeking career transitions. A common
        gap was real-world experience collaborating across disciplines on a
        shared project codebase.
      </p>
      <h2>Definition of Problem</h2>
      <p>
        The Women&apos;s Tech Hub organizers wanted to create a website for STEM
        learning resources aimed at children. I identified this as an
        opportunity to provide attendees with a realistic development project
        they could contribute to and showcase for future job applications.
      </p>
      <h2>Iteration to Solution</h2>
      <p>
        I established separate processes for the designers and developers to
        work towards the shared goal:
        <br />
        <br />
        Designers conducted research with teachers and community groups to
        understand effective educational methods and requirements. Then worked
        on the site using component driven design.
        <br />
        <br />
        For developers, I implemented strict linting, testing, and code review
        processes that simulated a professional development environment with a
        multi-contributor codebase.
      </p>

      <h2>Impact</h2>
      <p>
        Although the learning resource website itself was never officially
        released, that was not the primary objective. Over 4 months, all 16
        regular attendees from these groups successfully secured full-time
        employment in their first tech roles - siting this project as the main
        discussion point in interviews . Providing an applied learning
        experience bridging design, engineering, and collaboration produced
        career-accelerating results. This is one of my proudest professional
        achievements for its direct positive impact.
      </p>
      <Footer next="/parrot" />
    </>
  );
}
