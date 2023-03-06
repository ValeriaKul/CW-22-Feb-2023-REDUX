import React from "react";
import { useSelector } from "react-redux";

import BasketItem from "../BasketItem/BasketItem";
import s from "./style.module.css";

export default function BasketList() {
  const basket = useSelector((state) => state.basket);
  const products = useSelector((state) => state.products);
  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const itemsCount = basket.reduce((prev, curr) => prev + curr.count, 0);
  const sumCount = basketDescr.reduce(
    (prev, { price, discount, count }) =>
      prev + (price - (price * discount) / 100) * count,
    0
  );

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
    <div className={s.basket_cont}>
      <div className={s.total_basket_cont}>
        <p className={s.basket}>BASKET</p>
        <p className={s.basket}> {itemsCount} it. </p>
        <p className={s.basket}> {sumCount.toFixed(2)} $</p>
      </div>
      <div className={s.basket_item}>
        <div className={s.title_container}>
          <p className={s.item_id}>TITLE</p>
        </div>
        <div className={s.price_container}>
          <p className={s.item_count}>PRICE</p>
        </div>
        <div className={s.count_container}>
          <p className={s.item_count}>COUNT</p>
        </div>
        <div className={s.total_container}>
          <p className={s.item_count}>TOTAL</p>
        </div>
      </div>
      {basketDescr.map((elem) => (
        <BasketItem key={elem.id} {...elem} />
      ))}
      <div>
        <p>
          Discount:{" "}
          {(totalPriceWithoutDiscount - totalPriceWithDiscount).toFixed(2)} $
        </p>
      </div>
    </div>
  );
}
