import React from "react";
import BasketList from "../BasketList/BasketList";

import ProductsContainer from "../ProductsContainer/ProductsContainer";

export default function App() {
  return (
    <div>
      <ProductsContainer />
      <BasketList />
    </div>
  );
}
