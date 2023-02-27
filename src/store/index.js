import { combineReducers, createStore } from "redux";
import { productsReducer } from "./reducer/productsReducer";
import { basketReduser } from "./reducer/basketReduser";

/* import { createStore } from "redux";
import { productsReducer } from "./reducer/productsReducer";
export const store = createStore(productsReducer); */

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReduser,
});

export const store = createStore(rootReducer);
