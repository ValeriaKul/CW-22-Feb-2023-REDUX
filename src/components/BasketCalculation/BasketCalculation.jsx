import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";

export default function BasketCalculation() {
  const { basket, products } = useSelector((state) => state);
  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });
  const itemsCount = basket.reduce((prev, curr) => prev + curr.count, 0);
  const totalPriceWithDiscount = basketDescr.reduce(
    (prev, { price, discount, count }) =>
      prev + (price - (price * discount) / 100) * count,
    0
  );
  const totalPriceWithoutDiscount = basketDescr.reduce(
    (prev, { count, price }) => prev + price * count,
    0
  );
  return (
    <div className={s.container}>
      <p>Total in My Basket:</p>
      <div>
        <p>{itemsCount} it.</p>
        <p>{totalPriceWithDiscount} $</p>
        <p>
          Discount:{" "}
          {(totalPriceWithoutDiscount - totalPriceWithDiscount).toFixed(2)} $
        </p>
      </div>
    </div>
  );
}
