import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../store/reducer/productsReducer";
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
      <div className={s.btns_container}>
        <i
          className="fa-solid fa-trash-can btn_del"
          onClick={() => dispatch(deleteProductAction(id))}
        ></i>
        <i
          className="fa-solid fa-basket-shopping btn_add"
          onClick={() => dispatch({ type: "BASKET_ADD", payload: id })}
        ></i>
      </div>
    </div>
  );
}
