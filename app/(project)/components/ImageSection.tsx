import Image, { StaticImageData } from "next/image";
import styles from "../layout.module.scss";
import { ReactNode } from "react";

interface Props {
  caption: string | ReactNode;
  src: StaticImageData;
}

export default function ImageSection({ caption, src }: Props) {
  return (
    <section className={styles.section}>
      <Image placeholder="blur" fill alt={caption + ""} src={src} />
      <em>{caption}</em>
    </section>
  );
}
