import React from "react";
import { Link } from "react-router-dom";
import styles from "./toproduct.module.css";

const ToProduct = () => {
  return (
    <Link className={styles.link} to="/products">
      Shop Now
    </Link>
  );
};

export default ToProduct;
