import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Book from "../components/Book";
import image1 from "/blog-image-2.jpeg";
import Footer from "../components/Footer";
import styles from "./MainPage.module.scss";
import image11 from "/img11.jpg";
import { Link } from "react-router-dom";

//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainPage() {
  const [pageName, setPageName] = useState("Home");

  return (
    <div>
      <Header text={pageName} />
      <div className={styles.MainPage}>
        <img className={styles.img} src={image1} alt="blog-image-1.jpeg" />
      </div>
      <button className={styles.bookingBtn}>
        <Link className={styles.link} to="/schedule">
          CLICK HERE TO SCHEDULE AN APPOINTMENT
        </Link>
      </button>
      <div className={styles.intro}>
        <img className={styles.img1} src={image11} alt="img1" />
        <p>
          Looking younger is a common desire among many people, and there are
          numerous beauty treatments that can help achieve this goal. One
          popular option is Botox injections, which work by temporarily relaxing
          the muscles that cause wrinkles and fine lines on the face. This
          treatment can help smooth out wrinkles and make the face appear more
          youthful. Another option is dermal fillers, which are injections that
          add volume to the face and fill in wrinkles and fine lines. These
          fillers are often made from hyaluronic acid, which is a natural
          substance found in the body that helps to hydrate and plump up the
          skin. Dermal fillers can help restore lost volume to the cheeks, lips,
          and other areas of the face, giving a more youthful appearance.
          Another effective beauty treatment for looking younger is chemical
          peels. Chemical peels involve the application of a chemical solution
          to the skin, which causes the top layer of skin to peel off, revealing
          smoother, fresher-looking skin underneath. This treatment can help to
          reduce the appearance of wrinkles, age spots, and other signs of
          aging, as well as improve the overall texture and tone of the skin.
          Chemical peels can be done in different strengths, from mild to deep,
          depending on the severity of the skin concerns. It's important to work
          with a qualified and experienced skincare professional to determine
          which type of chemical peel is best for your skin type and concerns.
        </p>
      </div>
      {/* <Book /> */}
      <Footer />
    </div>
  );
}
