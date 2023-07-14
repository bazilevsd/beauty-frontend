import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.leftSide}>
        <Link className={styles.link} to="/">
          Home
        </Link>

        <Link className={styles.link} to="/about">
          About Us
        </Link>

        <Link className={styles.link} to="/services">
          Services
        </Link>

        <Link className={styles.link} to="/products">
          Products
        </Link>
      </div>
      <div className={styles.rightSide}>
        <Link className={styles.link} to="/admin">
          Admin Access
        </Link>
      </div>
    </div>
  );
}
