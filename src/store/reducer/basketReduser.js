const defaultState = [{ id: 12, count: 1 }];

const getById = (state, find_id) => state.find(({ id }) => id === find_id);

export const basketReduser = (state = defaultState, action) => {
  if (action.type === "BASKET_ADD") {
    const target = getById(state, action.payload);
    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      target.count++;
      return [...state];
    }
  } else if (action.type === "BASKET_INCREMENT") {
    const target = getById(state, action.payload);
    target.count++;
    return [...state];
  } else if (action.type === "BASKET_DECREMENT") {
    const target = getById(state, action.payload);
    target.count--;
    if (target.count === 0) {
      return state.filter((elem) => elem.id !== action.payload);
    }
    return [...state];
  }
  return state;
};
