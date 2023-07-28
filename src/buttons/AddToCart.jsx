import React from "react";
import styles from "./addtocart.module.css";
import { v4 as uuidv4 } from "uuid";

const AddToCart = ({ ...props }) => {
  const addItem = () => {
    const item = {
      id: uuidv4(),
      title: props.title,
      image: props.img,
      price: props.price,
    };
    props.setCart((prev) => [...prev, item]);

    props.setCounter((prev) => prev + 1);
  };

  return (
    <button className={styles.btn} onClick={addItem}>
      <i className="fas fa-shopping-cart"></i> &nbsp; &nbsp; Add to Cart
    </button>
  );
};

export default AddToCart;
