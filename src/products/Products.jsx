import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProdSty from "./../products/Products.module.css";
import Footerrr from "../Footerrr";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className={ProdSty.products}>
        {products.map((product) => (
          <div key={product.id} className={ProdSty.product}>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <h3>{product.category}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <Footerrr />
    </>
  );
};

export default Products;
