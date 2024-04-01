"use client";

import Link from "next/link";
import styles from "./nav.module.scss";
import { usePathname } from "next/navigation";

interface Props {
  light?: boolean;
}

function capitalize(word: string) {
  return word
    .split("")
    .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter.toLowerCase()))
    .join("");
}

function formatPathname(pathname: string) {
  let toShow = pathname.split("/")[1];

  switch (toShow) {
    case "oc":
      return "Osborne Clarke";
    case "rac":
      return "RAC";
    case "ranges":
      return "ranges.io";
    default:
      return capitalize(toShow);
  }
}

export default function Nav({ light }: Props) {
  const pathname = usePathname();
  return (
    <nav className={light ? styles.light_nav : styles.nav}>
      <Link href={`/`}>{light ? "RS" : "Rob Squires"}</Link>
      {light ? (
        <>
          <span>/</span>
          <p>{formatPathname(pathname)}</p>
        </>
      ) : (
        <ul>
          <li>
            <a href="https://github.com/RobTF9/">Code</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
