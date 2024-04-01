import React from "react";
import ImageSection from "../components/ImageSection";
import rac1 from "@/public/img/rac-1.jpg";
import rac2 from "@/public/img/rac-2.jpg";
import rac3 from "@/public/img/rac-3.png";
import rac4 from "@/public/img/rac-4.jpg";
import Link from "next/link";
import Footer from "@/components/footer";

export default function RACPage() {
  return (
    <>
      <header>
        <h1>
          Prototyped and tested new checkout journey, resulted in an{" "}
          <span>8% annual revenue increase</span>
        </h1>
      </header>
      <ImageSection
        src={rac1}
        caption="Information architecture for variants of the prototype"
      />
      <h2>Identification of Opportunity</h2>
      <p>
        New regulations from the IDD required the RAC to allow customers to
        actively build their own insurance packages by selecting individual
        elements, rather than having pre-bundled options. While complying with
        regulations was necessary, the business viewed this as a potential risk
        to revenue streams.
      </p>
      <ImageSection
        src={rac2}
        caption="The introduction the new checkout flow"
      />
      <h2>Definition of Problem</h2>
      <p>
        To assess the true impact, I designed a research project investigating
        users&apos; ability to recall and understand the distinct coverages they
        chose when customizing their breakdown packages during checkout. With an
        objective to prove comprehension was key to mitigating revenue risks.
      </p>
      <ImageSection
        src={rac3}
        caption="An example of a question, the cart to the right updates as users add elements"
      />
      <h2>Iteration to Solution</h2>
      <p>
        This initiative operated in weekly agile sprints. From Monday-Wednesday,
        we rapidly built coded prototypes using the RAC&apos;s actual website
        stack and pricing API. On Thursdays, we user tested the prototypes, then
        planned the next iteration on Fridays based on findings. After a month
        of iterations, we achieved an acceptable level of user comprehension
        with a reimagined &quot;question-oriented&quot; checkout flow. I then
        oversaw development as we transitioned this prototype design into
        production on the live RAC platform.
      </p>
      <ImageSection src={rac4} caption="The checkout flow on mobile devices" />
      <h2>Impact</h2>
      <p>
        Not only did the revamped user-centric journey meet compliance standards
        by ensuring customers understood their final selections, it actually
        drove an 8% increase in overall insurance revenue for the business. By
        prioritizing comprehension over conversion tactics alone, we created a
        transparent experience that bred confidence and willingness to purchase
        more coverages. This reinforced the RAC&apos;s trustworthiness while
        unlocking impactful business results.
      </p>
      <Footer next="/codehub" />
    </>
  );
}
