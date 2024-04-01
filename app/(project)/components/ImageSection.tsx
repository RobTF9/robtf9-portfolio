import styles from "../layout.module.scss";
import { ReactNode } from "react";

interface Props {
  caption: string | ReactNode;
  children: ReactNode;
}

export default function ImageSection({ caption, children }: Props) {
  return (
    <section className={styles.section}>
      {children}
      <em>{caption}</em>
    </section>
  );
}
