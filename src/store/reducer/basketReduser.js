const getById = (state, find_id) => state.find(({ id }) => id === find_id);
const ADD = "BASKET_ADD";
const INCREMENT = "BASKET_INCREMENT";
const DECREMENT = "BASKET_DECREMENT";
const REMOVE = "REMOVE";

export const basketAddAction = (id) => ({ type: ADD, payload: id });
export const basketIncrementAction = (payload) => ({
  type: INCREMENT,
  payload,
});
export const basketDecrementAction = (payload) => ({
  type: DECREMENT,
  payload,
});
export const basketRemoveAction = (payload) => ({ type: REMOVE, payload });

export const basketReduser = (state = [], action) => {
  if (action.type === ADD) {
    const target = getById(state, action.payload);
    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      target.count++;
      return [...state];
    }
  } else if (action.type === INCREMENT) {
    const target = getById(state, action.payload);
    target.count++;
    return [...state];
  } else if (action.type === DECREMENT) {
    const target = getById(state, action.payload);
    target.count--;
    if (target.count === 0) {
      return state.filter((elem) => elem.id !== action.payload);
    }
    return [...state];
  } else if (action.type === REMOVE) {
    return state.filter((elem) => elem.id !== action.payload);
  }
  return state;
};
