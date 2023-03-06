import React from "react";
import { useDispatch } from "react-redux";
import {
  basketDecrementAction,
  basketIncrementAction,
  basketRemoveAction,
} from "../../store/reducer/basketReduser";
import s from "./style.module.css";

export default function BasketItem({ id, title, price, discount, count }) {
  const dispatch = useDispatch();
  return (
    <div className={s.basket_item}>
      <div className={s.id_container}>
        <p className={s.item_id}>{title}</p>
      </div>
      <div className={s.price_container}>
        <p className={s.price}>{price} $</p>
      </div>
      <div className={s.count_container}>
        <i
          className="fa-sharp fa-solid fa-minus"
          onClick={() => {
            dispatch(basketDecrementAction(id));
          }}
        ></i>
        <p className={s.item_count}>{count}</p>
        <i
          className="fa-sharp fa-solid fa-plus"
          onClick={() => dispatch(basketIncrementAction(id))}
        ></i>
      </div>
      <div className={s.total_container}>
        <p className={s.total}>
          {((price - (price * discount) / 100) * count).toFixed(2)} ${" "}
        </p>
      </div>
      <div className={s.btn_container}>
        <i
          className="fa-solid fa-trash-can btn_del"
          onClick={() => dispatch(basketRemoveAction(id))}
        ></i>
      </div>
    </div>
  );
}
