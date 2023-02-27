import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export default function AddProduct() {
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
    const { title, price, discount } = event.target;
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        title: title.value,
        price: price.value,
        discount: discount.value,
      },
    });
    title.value = "";
    price.value = "";
    discount.value = "";
  };
  return (
    <div className={s.form}>
      <form className={s.form_add} onSubmit={submit}>
        <input type="text" name="title" placeholder="title" />
        <input type="number" name="price" placeholder="price" />
        <input type="number" name="discount" placeholder="discount" />
        <button className={s.btn_add}>Add</button>
      </form>
    </div>
  );
}
