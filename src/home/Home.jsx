import React from "react";
import styles from "./home.module.css";
import ToProduct from "../buttons/ToProduct";

const Home = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>Welcome to FakeStore!</h2>
      <p className={styles.para}>
        FakeStore is your one-stop destination for everything from Jewelry to
        elecronics and clothing for both men and women. Step into a world of
        endless possibilities and let us redefine your shopping journey.
      </p>
      <ToProduct />
    </main>
  );
};

export default Home;
