import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Header() {
  const checkClass = ({ isActive }) => (isActive ? s.active : "");
  return (
    <div>
      <nav className={s.menu}>
        <NavLink className={checkClass} to="/">
          Add product
        </NavLink>
        <NavLink className={checkClass} to="/products">
          Products
        </NavLink>
        <NavLink className={checkClass} to="/basket">
          Basket
        </NavLink>
        <NavLink className={checkClass} to="/about">
          About us
        </NavLink>
      </nav>
    </div>
  );
}
