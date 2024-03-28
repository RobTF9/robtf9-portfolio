import Nav from "@/components/nav";
import styles from "./layout.module.scss";
import { ReactNode } from "react";
import Wrapper from "@/components/wrapper";

interface Props {
  children: ReactNode;
}

export default function ProjectLayout({ children }: Props) {
  return (
    <Wrapper>
      <main>
        <Nav light />
        <div className={styles.project}>{children}</div>
      </main>
    </Wrapper>
  );
}
