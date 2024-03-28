import Image from "next/image";
import meAndRani from "@/public/me-and-rani.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Helping companies <span>identify valuable opportunities</span> and{" "}
        <span>solve complicated problems</span>. Using research, design and
        engineering to craft products that <span>create real impact</span>
      </h1>
      <div>
        <Image
          src={meAndRani}
          placeholder="blur"
          alt="A picture of Rob Squires and his dog, Rani"
          fill
        />
      </div>
    </header>
  );
}
