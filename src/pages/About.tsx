import React, { useState } from "react";
import { Header } from "../components/Header";
import image8 from "/img8.jpg";
import image7 from "/img7.jpg";
import styles from "./About.module.scss";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  const [pageName, setPageName] = useState("About Us");
  return (
    <div>
      <Header text={pageName} />
      <button className={styles.bookingBtn}>
        <Link className={styles.link} to="/schedule">
          CLICK HERE TO SCHEDULE AN APPOINTMENT
        </Link>
      </button>
      <div className={styles.article}>
        <img className={styles.img1} src={image8} alt="blog-image-1.jpeg" />
        <p className={styles.p}>
          Beauty treatments offer a range of benefits beyond just improving
          one's physical appearance. One of the primary benefits is improved
          self-esteem and confidence. When people feel good about how they look,
          they tend to have more self-confidence and feel better about
          themselves overall. This increased self-esteem can have a positive
          impact on all areas of life, from personal relationships to
          professional success. Another benefit of beauty treatments is improved
          skin health. Many treatments, such as facials and chemical peels, help
          to improve the texture and tone of the skin, while also addressing
          issues such as acne, hyperpigmentation, and fine lines. Regular
          treatments can help to keep the skin looking and feeling healthy,
          reducing the need for more invasive procedures down the line. Finally,
          beauty treatments can offer a relaxing and rejuvenating experience.
          Many treatments are designed to be both therapeutic and restorative,
          providing a much-needed break from the stresses of everyday life.
          Whether it's a soothing massage or a calming facial, these treatments
          can help to reduce stress levels and promote overall wellbeing.
          Additionally, the sense of being pampered and cared for can be a
          powerful mood booster, helping to improve mental health and emotional
          wellbeing.
        </p>
        <img className={styles.img2} src={image7} alt="blog-image-1.jpeg" />
        <p className={styles.p}>
          Additionally, beauty treatments can also be a form of self-care.
          Taking the time to care for oneself is an important aspect of overall
          health and wellbeing. By indulging in beauty treatments, people can
          prioritize their own needs and make themselves a priority. This can be
          especially important for individuals who are busy or have a lot of
          responsibilities, as it can be easy to neglect one's own needs when
          focusing on the needs of others. By engaging in beauty treatments,
          people can take a break from their busy lives and focus on themselves
          for a while. Finally, beauty treatments can be a way to express
          creativity and individuality. There are many different types of beauty
          treatments available, and people can choose the ones that best suit
          their individual tastes and preferences. Whether it's a bold new hair
          color, an intricate nail design, or a unique makeup look, beauty
          treatments can help people express themselves and show off their
          personality. This can be a fun and exciting way to experiment with new
          styles and trends, and can be a great confidence booster for
          individuals who are looking to try something new. Moreover, some
          beauty treatments such as massage and aromatherapy can also have
          therapeutic benefits. These treatments can help to reduce muscle
          tension, relieve stress and anxiety, and promote relaxation. For
          individuals who suffer from chronic pain or other health conditions,
          these treatments can provide a natural and holistic approach to
          managing symptoms. Beauty treatments that incorporate natural and
          organic ingredients can also offer a more eco-friendly and sustainable
          alternative to traditional beauty products, making them an attractive
          option for individuals who are concerned about the impact of their
          beauty routine on the environment.
        </p>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
