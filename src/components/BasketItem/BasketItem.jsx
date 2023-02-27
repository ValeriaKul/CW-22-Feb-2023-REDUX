import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export default function BasketItem({ id, count }) {
  const dispatch = useDispatch();
  return (
    <div className={s.basket_item}>
      <div className={s.id_container}>
        <p className={s.item_id}>{id}</p>
      </div>
      <div className={s.count_container}>
        <button
          onClick={() => {
            dispatch({ type: "BASKET_DECREMENT", payload: id });
          }}
        >
          -
        </button>
        <p className={s.item_count}>{count}</p>
        <button
          onClick={() => dispatch({ type: "BASKET_INCREMENT", payload: id })}
        >
          +
        </button>
      </div>
    </div>
  );
}
