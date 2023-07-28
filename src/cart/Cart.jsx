import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  const handleRemoval = (e) => {
    let target;
    for (let i = 0; i < props.cart.length; i++) {
      if (e.target.id === props.cart[i].id) {
        target = i;
      }
    }

    props.setCart((prev) => {
      return prev.slice(0, target).concat(prev.slice(target + 1));
    });

    props.setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    setTotal(() => {
      let totalPrice = 0;
      for (let key in props.cart) {
        if (props.cart.hasOwnProperty(key)) {
          totalPrice += props.cart[key].price;
        }
      }

      return totalPrice;
    });
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.head}>Your Shopping Cart</h3>
          <p className={styles.count}>
            {props.cart.length} {props.cart.length === 1 ? "Item" : "Items"}
          </p>
        </div>
        <div className={styles.cartcon}>
          {props.cart.map((item) => {
            return (
              <div className={styles.item} key={uuidv4()}>
                <img className={styles.img} src={item.image} />
                <div className={styles.info}>
                  <p className={styles.title}>{item.title}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className={styles.remcon}>
                  <button
                    className={styles.remove}
                    id={item.id}
                    onClick={handleRemoval}
                  >
                    Remove <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.container2}>
        <div className={styles.total}>
          <p className={styles.para}>Estimated total</p>
          <p className={styles.para}>${total.toFixed(2)}</p>
        </div>
        <Link className={styles.link} to="/">
          Proceed to checkout
        </Link>
        <img
          className={styles.img2}
          src="https://images-na.ssl-images-amazon.com/images/I/71H9iX%2B14pL._AC_SL1500_.jpg"
        />
      </section>
    </main>
  );
};

export default Cart;
