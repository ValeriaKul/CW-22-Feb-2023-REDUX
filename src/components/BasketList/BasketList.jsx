import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import s from "./style.module.css";

export default function BasketList() {
  const basket = useSelector((state) => state.basket);

  return (
    <div className={s.basket_cont}>
      <p className={s.basket}>BASKET</p>
      <div className={s.basket_item}>
        <div className={s.id_container}>
          <p className={s.item_id}>ID</p>
        </div>
        <div className={s.count_container}>
          <p className={s.item_count}>COUNT</p>
        </div>
      </div>
      {basket.map((elem) => (
        <BasketItem key={elem.id} {...elem} />
      ))}
    </div>
  );
}
