import React from "react";
import styles from "./Modal.module.scss";
import { Link } from "react-router-dom";

//@ts-ignore
const Modal = ({ open, onClose, text }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className={styles.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContainer}
      >
        <p>{text}</p>
        <div className="modalRight">
          <p onClick={onClose} className={styles.closeBtn}>
            X
          </p>
          <div>
            <a href="https://store-3d-model-app.herokuapp.com/store/">
              <button className={styles.button91}>Visit Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
