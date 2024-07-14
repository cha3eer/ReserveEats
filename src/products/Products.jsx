import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar'
import ProdSty from './../products/Products.module.css'
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
    <div className={ProdSty.products}>
        <Navbar/>
      {products.map((el) => (
        <div className={ProdSty.product}>
            <img src={el.thumbnail} alt=""/>
          <h1>{el.title}</h1>
          <h2>${el.price}</h2>
        <h3>{el.category}</h3>
          <h4>{el.description}</h4>
        </div>
      ))}
      <Footerrr/>
    </div>
  );
};

export default Products
