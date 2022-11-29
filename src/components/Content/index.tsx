import React from "react";
import { ContentProps } from "../../interfaces/Content";
import styles from "./Content.module.scss";

export default function Content(props: ContentProps) {
  return <main className={styles.mainContent}>{props.children}</main>;
}
