import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage/About";
import AddProductPage from "../../pages/AddProductPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ProductsPage from "../../pages/ProductsPage";
import TestPage from "../../pages/TestPage";
import Header from "../Header/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AddProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:name" element={<AboutPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
