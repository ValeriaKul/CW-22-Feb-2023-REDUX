import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import ProductsList from "../ProductsList/ProductsList";

export default function ProductsContainer() {
  return (
    <div>
      <AddProduct />
      <ProductsList />
    </div>
  );
}
