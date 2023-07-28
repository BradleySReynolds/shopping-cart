import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./products.module.css";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const fetchData = async (api) => {
    try {
      fetch(api)
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch (error) {
      console.log("Error fetiching Data:", error);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products${selectedValue}`);
  }, [selectedValue]);

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products?limit=15");
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.head}>Shop</h2>
        <p className={styles.para}>
          <Link className={styles.link} to="/">
            Home
          </Link>{" "}
          &gt; Products &gt;{" "}
          <select className={styles.select} onChange={handleSelectChange}>
            {" "}
            <option value="?limit=15">All</option>
            <option value="/category/men's clothing">Men</option>
            <option value="/category/women's clothing">Women</option>
            <option value="/category/electronics">Electronics</option>
            <option value="/category/jewelery">Jewelry</option>
          </select>
        </p>
      </div>
      <main className={styles.main}>
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              img={item.image}
              price={item.price}
              setCart={props.setCart}
              setCounter={props.setCounter}
            />
          );
        })}
      </main>
    </>
  );
};

export default Products;
