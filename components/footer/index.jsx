import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/mucahittasan0" target="_blank">
        Mucahit Tasan
      </Link>
    </footer>
  );
}

export default Footer;