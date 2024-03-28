import Link from "next/link";
import styles from "./work.module.scss";
import { workerData } from "worker_threads";

interface ProjectProps {
  name: string;
  text: string[];
  src?: string;
}

function Project({ name, text, src }: ProjectProps) {
  return (
    <li
      className={`${styles.work__list__item} ${styles[name]}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <Link href={`/${name}`} className={styles.work__list__item__content}>
        <p>
          {text.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>
      </Link>
    </li>
  );
}

export default function Work() {
  return (
    <section className={styles.work}>
      <h2 className={styles.work__header}>Work</h2>
      <ul className={styles.work__list}>
        <Project
          name="perceptive"
          src="/img/perceptive-cover.png"
          text={[
            "Using language models to improve application security culture, ",
            "raised pre-seed funding, designed and engineered initial product",
          ]}
        />
        <Project
          name="ranges"
          src="/img/ranges-cover.png"
          text={[
            "Enabled the next generation of cybersecurity training, ",
            "saved $34.5 million a year in operational costs",
          ]}
        />
        <Project
          name="elliptic"
          src="/img/elliptic-cover.png"
          text={[
            "Designed the first cross-blockchain tracing tool, ",
            "reduced AML investigation duration by 75%",
          ]}
        />
        <Project
          name="rac"
          src="/img/rac-cover.png"
          text={[
            "Prototyped and tested new checkout journey, ",
            "resulted in an 8% annual revenue increase",
          ]}
        />

        <Project
          name="codehub"
          src="/img/codehub-cover.png"
          text={[
            "Delivered workshops on collaborative development, ",
            "got 16 designers and developers their first job",
          ]}
        />
        <Project
          name="parrot"
          src="/img/parrot-cover.png"
          text={[
            "Built a browser based language learning tool, ",
            "increased daily active users by 470%",
          ]}
        />
        <Project
          name="panasonic"
          src="/img/panasonic-cover.png"
          text={[
            "Reduced cognitive load within Panasonic search, ",
            "increased number of sales through site",
          ]}
        />
        <Project
          name="ethvault"
          src="/img/ethvault-cover.png"
          text={["Interface design and build for Ethereum wallet"]}
        />
        <Project
          name="maibee"
          src="/img/maibee-cover.png"
          text={["Full stack build of ecommerce site"]}
        />
        <Project
          name="oc"
          src="/img/oc-cover.png"
          text={["Lead creation of a new design system"]}
        />
      </ul>
    </section>
  );
}
