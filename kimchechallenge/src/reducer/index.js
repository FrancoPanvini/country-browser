export const initialState = { data: [] };

export const actionsTypes = { SET_DATA: "SET_DATA" };

export const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
