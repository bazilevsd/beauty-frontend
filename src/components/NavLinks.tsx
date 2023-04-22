import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";

export default function NavLinks() {
  return (
    <div className={styles.NavLinks}>
      <div className={styles.flex}>
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
    </div>
  );
}
