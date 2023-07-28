import React from "react";
import styles from "./productcard.module.css";
import AddToCart from "../buttons/AddToCart";

const ProductCard = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.img} />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.price}>${props.price.toFixed(2)}</p>
      <AddToCart {...props} />
    </div>
  );
};

export default ProductCard;
