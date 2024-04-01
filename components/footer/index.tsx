import Link from "next/link";
import styles from "./footer.module.scss";

interface Props {
  next: string;
}

export default function Footer({ next }: Props) {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/RobTF9/">Code</a>
      <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a>
      <Link href={next}>Next project</Link>
    </footer>
  );
}
