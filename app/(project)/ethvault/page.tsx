import ImageSection from "../components/ImageSection";
import VideoSection from "../components/VideoSection";
import ethvault1 from "@/public/img/ethvault-1.jpg";
import ethvault2 from "@/public/img/ethvault-2.jpg";
import ethvault3 from "@/public/img/ethvault-3.jpg";
import Footer from "@/components/footer";
import Image from "next/image";

export default function EthvaultPage() {
  return (
    <>
      <header>
        <h1>
          Interface design and build for open source{" "}
          <span>Ethereum wallet</span>
        </h1>
      </header>
      <ImageSection caption="Responsive marketing site designs">
        <Image
          fill
          placeholder="blur"
          src={ethvault1}
          alt="Responsive marketing site designs"
        />
      </ImageSection>
      <h2>Identification of Opportunity</h2>
      <p>
        As cryptocurrency gained greater traction, users sought trustworthy
        solutions to securely manage their private keys and access decentralized
        applications (dApps). An opportunity emerged to provide an open and
        transparent wallet experience.
      </p>
      <ImageSection caption="Ethvault on mobile">
        <Image
          fill
          placeholder="blur"
          alt="Ethvault on mobile"
          src={ethvault2}
        />
      </ImageSection>
      <h2>Definition of Problem</h2>
      <p>
        Our hypothesis was that an open-source, in-browser wallet and dApp
        portal for Ethereum would be viewed as more trustworthy than closed
        browser extensions. We believed allowing users to audit the code and
        avoid installing additional software would instill more confidence.
      </p>
      <ImageSection caption="Component design">
        <Image fill placeholder="blur" src={ethvault3} alt="Component design" />
      </ImageSection>
      <h2>Iteration to Solution</h2>
      <p>
        As a designer and UI engineer, I worked on iterating and refining an
        approachable user experience for this open wallet. The interface aimed
        to smoothly combine private key management with a curated directory of
        verified dApps users could seamlessly interact with. We conducted
        usability testing to optimize flows like key backup, recovery phrases,
        and dApp connection approval processes based on feedback.
      </p>
      <VideoSection
        src="/img/ethvault-4.mp4"
        caption="An example of how users interact while using a dApp"
      />
      <h2>Impact</h2>
      <p>
        Ultimately, our hypothesis that an open, auditable in-browser option
        would be favored over closed extensions like MetaMask proved incorrect.
        As MetaMask and others gained momentum, our project struggled to achieve
        mass adoption. While the end product showcased transparency and design
        for blockchain users, the market overwhelmingly valued the convenience
        and integrations offered by extension-based wallets willing to sacrifice
        some openness. This experience provided valuable learnings about
        bridging usability and security requirements in novel blockchain UX
        paradigms. It also highlighted how community trust accumulates through
        network effects, often prioritized over upfront transparency.
      </p>
      <Footer next="/maibee" />
    </>
  );
}
