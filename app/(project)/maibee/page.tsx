import ImageSection from "../components/ImageSection";
import maibee1 from "@/public/img/maibee-1.jpg";
import maibee2 from "@/public/img/maibee-2.png";
import maibee3 from "@/public/img/maibee-3.png";
import maibee4 from "@/public/img/maibee-3.png";
import Link from "next/link";

export default function MaibeePage() {
  return (
    <>
      <header>
        <h1>
          Full stack build of <span>ecommerce site</span>
        </h1>
      </header>
      <ImageSection
        src={maibee1}
        caption="Logo variants provided by Maibee, used to define the UI system"
      />
      <h2>Identification of Opportunity</h2>
      <p>
        MaiBee, an Instagram fashion brand with a following of nearly 800k,
        needed a highly scalable ecommerce website capable of handling immense
        traffic spikes after promoting new product drops to their audience.
      </p>
      <ImageSection
        src={maibee2}
        caption="Landing page and product page on mobile"
      />
      <h2>Definition of Problem</h2>
      <p>
        The key challenge was ensuring the site could remain resilient and fast
        under the load of hundreds of thousands of visitors within a short
        window after new items were advertised on Instagram. Additionally, the
        design needed to reflect MaiBee&apos;s unique brand aesthetic in a
        simple yet extensible UI system.
      </p>
      <ImageSection src={maibee3} caption="Desktop product list page" />
      <h2>Iteration to Solution</h2>
      <p>
        On the design front, I created a comprehensive UI kit and component
        library that translated MaiBee&apos;s branding into a clean, on-brand
        ecommerce experience poised to scale. For the technical implementation,
        I opted for a Gatsby frontend integrated with a headless Shopify
        backend. By fetching and statically rendering product data at build
        time, this approach minimized backend strain during high traffic
        periods.
      </p>
      <ImageSection
        src={maibee4}
        caption="Individual product pages on mobile"
      />
      <h2>Impact</h2>
      <p>
        The final MaiBee ecommerce site successfully maintained performance and
        uptime despite the projected huge visitor influxes following Instagram
        product launches. Its resilient architecture prevented any downtime.
        More critically, the optimized browsing and checkout experience
        seamlessly converted MaiBee&apos;s passionate Instagram audience into
        customers, generating significant revenue before the brand moved on to
        other projects. This project demonstrated my ability to combine
        compelling branded design with robust, scalable full-stack development -
        creating digital experiences able to withstand &quot;going viral&quot;
        from day one.
      </p>
      <Link href="/oc">Next Project</Link>
    </>
  );
}
