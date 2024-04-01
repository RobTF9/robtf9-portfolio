import ImageSection from "../components/ImageSection";
import rac1 from "@/public/img/rac-1.jpg";
import rac2 from "@/public/img/rac-2.jpg";
import rac3 from "@/public/img/rac-3.png";
import rac4 from "@/public/img/rac-4.jpg";
import Footer from "@/components/footer";
import Image from "next/image";

export default function RACPage() {
  return (
    <>
      <header>
        <h1>
          Prototyped and tested new checkout journey, resulted in an{" "}
          <span>8% annual revenue increase</span>
        </h1>
      </header>
      <ImageSection caption="Information architecture for variants of the prototype">
        <Image
          fill
          placeholder="blur"
          src={rac1}
          alt="Information architecture for variants of the prototype"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        New regulations from the IDD required the RAC to allow customers to
        actively build their own insurance packages by selecting individual
        elements, rather than having pre-bundled options. While complying with
        regulations was necessary, the business viewed this as a potential risk
        to revenue streams.
      </p>
      <ImageSection caption="The introduction the new checkout flow">
        <Image
          fill
          placeholder="blur"
          src={rac2}
          alt="The introduction the new checkout flow"
        />
      </ImageSection>
      <h2>Definition of Problem</h2>
      <p>
        To assess the true impact, I designed a research project investigating
        users&apos; ability to recall and understand the distinct coverages they
        chose when customizing their breakdown packages during checkout. With an
        objective to prove comprehension was key to mitigating revenue risks.
      </p>
      <ImageSection caption="An example of a question, the cart to the right updates as users add elements">
        <Image
          fill
          placeholder="blur"
          src={rac3}
          alt="An example of a question, the cart to the right updates as users add elements"
        />
      </ImageSection>
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
      <ImageSection caption="The checkout flow on mobile devices">
        <Image
          fill
          placeholder="blur"
          src={rac4}
          alt="The checkout flow on mobile devices"
        />
      </ImageSection>
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
