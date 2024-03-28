import { ReactNode } from "react";
import styles from "../layout.module.scss";

interface Props {
  caption: string | ReactNode;
  src: string;
}

export default function VideoSection({ caption, src }: Props) {
  return (
    <section className={styles.section}>
      <video controls>
        <source src={src} type="video/mp4"></source>
      </video>
      <em>{caption}</em>
    </section>
  );
}
