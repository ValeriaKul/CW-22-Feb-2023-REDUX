import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import s from "./style.module.css";

export default function ProductsList() {
  const products = useSelector((state) => state.products);

  return (
    <div className={s.container}>
      <p className={s.product_list}>PRODUCT LIST</p>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
