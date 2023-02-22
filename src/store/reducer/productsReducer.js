const products = [
  { id: 1, title: "product 1", price: 10, discount: 3 },
  { id: 2, title: "product 2", price: 20, discount: 4 },
  { id: 3, title: "product 3", price: 30, discount: 5 },
];

export const productsReducer = (state = products, action) => {
    if (action.type === "ADD") {
        return [...state, action.payload];
      } else if (action.type === "DELETE"){
        return state.filter(({id}) => id !== action.payload)
      } else {
        return state;
      }
}