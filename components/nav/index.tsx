import Link from "next/link";
import styles from "./nav.module.css";

interface Props {
  light?: boolean;
}

export default function Nav({ light }: Props) {
  return (
    <nav className={styles.nav}>
      <Link href={`/`}>Rob Squires</Link>
      <ul>
        <li>
          <a
            href="https://github.com/RobTF9/"
            className={light ? styles.light : ""}
          >
            Code
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/robtf9/"
            className={light ? styles.light : ""}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
