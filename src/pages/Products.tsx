import React, { useState } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import image1 from "/product1.jpg";
import image2 from "/product2.jpg";
import image3 from "/product3.jpg";
import image4 from "/product4.jpg";
import styles from "./Products.module.scss";
import { Link } from "react-router-dom";

export default function Products() {
  const [pageName, setPageName] = useState("Products");
  return (
    <div>
      <Header text={pageName} />
      <div>
        <Link className={styles.link} to="/">
          <div className={styles.book}>Book a session </div>
        </Link>
        <div className={styles.block}>
          <img className={styles.img} src={image1} alt="blog-image-1.jpeg" />
          <p>
            Beauty treatments offer a range of benefits beyond just improving
            one's physical appearance. One of the primary benefits is improved
            self-esteem and confidence. When people feel good about how they
            look, they tend to have more self-confidence and feel better about
            themselves overall. This increased self-esteem can have a positive
            impact on all areas of life, from personal relationships to
            professional success.
          </p>
        </div>
        <div className={styles.block}>
          <img className={styles.img} src={image2} alt="blog-image-1.jpeg" />
          <p>
            Another benefit of beauty treatments is improved skin health. Many
            treatments, such as facials and chemical peels, help to improve the
            texture and tone of the skin, while also addressing issues such as
            acne, hyperpigmentation, and fine lines. Regular treatments can help
            to keep the skin looking and feeling healthy, reducing the need for
            more invasive procedures down the line.
          </p>
        </div>
        <div className={styles.block}>
          <img className={styles.img} src={image3} alt="blog-image-1.jpeg" />
          <p>
            Additionally, beauty treatments can also be a form of self-care.
            Taking the time to care for oneself is an important aspect of
            overall health and wellbeing. By indulging in beauty treatments,
            people can prioritize their own needs and make themselves a
            priority. This can be especially important for individuals who are
            busy or have a lot of responsibilities, as it can be easy to neglect
            one's own needs when focusing on the needs of others. By engaging in
            beauty treatments, people can take a break from their busy lives and
            focus on themselves for a while.
          </p>
        </div>
        <div className={styles.block}>
          <img className={styles.img} src={image4} alt="blog-image-1.jpeg" />
          <p>
            Moreover, some beauty treatments such as massage and aromatherapy
            can also have therapeutic benefits. These treatments can help to
            reduce muscle tension, relieve stress and anxiety, and promote
            relaxation. For individuals who suffer from chronic pain or other
            health conditions, these treatments can provide a natural and
            holistic approach to managing symptoms. Beauty treatments that
            incorporate natural and organic ingredients can also offer a more
            eco-friendly and sustainable alternative to traditional beauty
            products, making them an attractive option for individuals who are
            concerned about the impact of their beauty routine on the
            environment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
