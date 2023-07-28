import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Products from "../products/Products";
import About from "../about/About";
import Cart from "../cart/Cart";

const Header = () => {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <header className={styles.main}>
        <h1 className={styles.title}>FakeStore</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/products">
              Products
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/cart">
              <i className="fas fa-shopping-bag"></i>
              <p className={styles.counter}>{counter}</p>
            </Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route
          path="/products"
          Component={(routeProps) => (
            <Products
              {...routeProps}
              setCart={setCart}
              setCounter={setCounter}
            />
          )}
        />
        <Route path="/about" Component={About} />
        <Route
          path="/cart"
          Component={(routeProps) => (
            <Cart
              {...routeProps}
              cart={cart}
              setCart={setCart}
              setCounter={setCounter}
            />
          )}
        />
      </Routes>
    </Router>
  );
};

export default Header;
