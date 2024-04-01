import Link from "next/link";
import ImageSection from "../components/ImageSection";
import VideoSection from "../components/VideoSection";
import parrot2 from "@/public/img/parrot-2.jpg";
import parrot3 from "@/public/img/parrot-3.jpg";
import Footer from "@/components/footer";

export default function ParrotPage() {
  return (
    <>
      <header>
        <h1>
          Built a browser based language learning tool,{" "}
          <span>increased daily active users by 470%</span>
        </h1>
      </header>
      <VideoSection
        src="/img/parrot.m4v"
        caption={
          <>
            &quot;Parrot&quot; in action, try it{" "}
            <a href="https://parrot.onrender.com/">here</a>
          </>
        }
      />
      <h2>Identification of Opportunity</h2>
      <p>
        While learning Bengali, I discovered a lack of interactive applications
        to effectively aid the learning process. My tutor mentioned most
        available resources were static, making it difficult to gauge student
        engagement and progress, especially when teaching remotely.
      </p>
      <h2>Definition of Problem</h2>
      <p>
        Through joining online communities, interviewing a number of language
        tutors and learners, and conducting market research I discovered this
        problem affects those learning Bengali. Despite being one of the most
        widely spoken languages in the world Bengali, or Bangla in it&apos;s
        native tongue, has no presence on some of the biggest language learning
        apps. With a large disapora residing in the UK and wanting to connect
        with the language but having no straightforward way to do so.
      </p>
      <ImageSection
        src={parrot2}
        caption="A WIP for a new feature teaching users the Bengali alphabet"
      />
      <h2>Iteration to Solution</h2>
      <p>
        I initially built a proof-of-concept app called &quot;Lexicon&quot; that
        allowed users to input words they needed to learn. However, this
        form-based experience failed to provide an intuitive or engaging
        learning flow. Rather than relying on forms, I pivoted the app to
        utilize a visual metaphor of a parrot that learners could
        &quot;teach&quot; new words to. Users would speak the words aloud, and
        the parrot would repeat them back, creating an interactive
        call-and-response dynamic. This reimagined interface made practicing
        vocabulary feel more natural and achievable through bite-sized
        microlearning moments.
      </p>
      <ImageSection
        src={parrot3}
        caption="Interface designs for adding multiple languages to teach your parrot"
      />
      <h2>Impact</h2>
      <p>
        The parrot metaphor significantly improved engagement and retention. My
        user base grew from just 9 to 52 active daily users after this key
        design iteration. By centering the experience around an approachable
        virtual learning companion, I created an app that turned vocabulary
        practice into an intuitive conversational experience. This made language
        learning feel more achievable for users while providing mechanisms to
        boost long-term retention.
      </p>
      <Footer next="/panasonic" />
    </>
  );
}
