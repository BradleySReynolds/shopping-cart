import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <p className={styles.para}>
        This is a fictional store and none of the products displayed here exist.
      </p>
      <p className={styles.para}>
        Products' information and images:{" "}
        <a className={styles.link} href="https://fakestoreapi.com">
          Fake Store API
        </a>
        .
      </p>
      <p className={styles.para}>
        Home page background photo by{" "}
        <a className={styles.link} href="https://unsplash.com/@jokerhoi">
          Chan Hoi
        </a>{" "}
        on{" "}
        <a className={styles.link} href="https://unsplash.com/backgrounds">
          Unsplash
        </a>
        .
      </p>
    </section>
  );
};

export default About;
