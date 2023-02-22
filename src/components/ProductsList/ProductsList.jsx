import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

export default function ProductsList() {
  const products = useSelector(state => state);
  
  return (
    <div>
     {
      products.map(product => <Product key={product.id} {...product}/>)
     }
    </div>
  );
}
