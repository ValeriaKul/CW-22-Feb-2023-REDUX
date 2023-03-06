import React from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../store/reducer/productsReducer";
import s from "./style.module.css";

export default function AddProduct() {
  const dispatch = useDispatch();

  const MESSAGE = "Заполните все поля!";

  const submit = (event) => {
    event.preventDefault();
    const { title, price, discount } = event.target;
    if (title.value === "" || price.value === "") {
      alert(MESSAGE);
      title.style.border = "2px solid red";
      price.style.border = "2px solid red";
    } else {
      dispatch(addProductAction(title.value, price.value, discount.value));
      title.value = "";
      price.value = "";
      discount.value = "";
      title.style.border = "none";
      price.style.border = "none";
    }
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
