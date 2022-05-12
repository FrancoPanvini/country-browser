export const initialState = { data: [], order: "continent" };

export const actionsTypes = { SET_DATA: "SET_DATA", SET_ORDER: "SET_ORDER" };

export const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionsTypes.SET_ORDER:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};
