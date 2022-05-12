export const initialState = { data: [], order: "continent", filteredData: [] };

export const actionsTypes = { SET_DATA: "SET_DATA", SET_ORDER: "SET_ORDER", SET_FILTERED_DATA: "SET_FILTERED_DATA" };

export const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionsTypes.SET_ORDER:
      return { ...state, order: action.payload };
    case actionsTypes.SET_FILTERED_DATA:
      return { ...state, filteredData: action.payload };
    default:
      return state;
  }
};
