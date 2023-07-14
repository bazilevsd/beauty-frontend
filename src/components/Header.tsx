import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { TiThMenu } from "react-icons/ti";
import NavLinks from "./NavLinks";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { RiMapPinUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styless from "./Title.module.scss";

interface Text {
  text: string;
}
export const Header: React.FC<Text> = ({ text }) => {
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.Header}>
      <div className={styless.wrapper}>
        <div className={styless.bg}>Nano Tam</div>
        <div className={styless.bg}>Nano Tam</div>
      </div>
      <div className={styles.headCenter}>
        {text}
        <div className={styles.icons}>
          <Link
            className={styles.link}
            to="tel:1-510-541-1721"
            title="Give me a call"
          >
            <AiTwotonePhone />
          </Link>
          <RiMapPinUserFill />
          <Link
            className={styles.link}
            to="mailto:bazilevsd@gmail.com"
            title="Send an email"
          >
            <AiOutlineMail />
          </Link>
        </div>
      </div>
      <div className={styles.nav}>
        <TiThMenu
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            setOpenNav((current) => (current = !openNav));
          }}
        />
        <NavLinks open={openNav} onClose={() => setOpenNav(false)} />
      </div>
    </div>
  );
};
