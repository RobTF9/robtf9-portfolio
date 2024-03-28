import { ReactNode } from "react";
import styles from "./wrapper.module.scss";

interface Props {
  blue?: boolean;
  children: ReactNode;
}

export default function Wrapper({ blue, children }: Props) {
  return (
    <div className={blue ? styles.wrapper__blue : styles.wrapper}>
      {children}
    </div>
  );
}
