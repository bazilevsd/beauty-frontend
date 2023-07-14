import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";
//@ts-ignore
export default function NavLinks({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className={styles.NavLinks}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.flex}
      >
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
        <button onClick={onClose} className={styles.closeBtn}>
          Close Menu
        </button>
      </div>
    </div>
  );
}
