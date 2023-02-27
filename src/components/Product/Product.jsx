import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export default function Product({ id, title, price, discount }) {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p className={s.product_title}>{title}</p>
      <div className={s.price_container}>
        <p className={s.product_price}>{price} $</p>
        <p className={s.product_price_disc}>
          {price - (price * discount) / 100} $
        </p>
      </div>
      <button className={s.btn_del} onClick={() => dispatch({ type: "DELETE", payload: id })}>
        Delete
      </button>
      <button className={s.btn_add} onClick={() => dispatch({ type: "BASKET_ADD", payload: id })}>
        Add to Basket
      </button>
    </div>
  );
}
