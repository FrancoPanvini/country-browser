import React, { useReducer } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./normalize.css";
import "./globalstyle.css";

//? COMPONENTS
import Home from "./components/Home";

//? REDUCER
import { initialState, reducer } from "./reducer/index";
export const GlobalContext = React.createContext();

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Home />
      </GlobalContext.Provider>
    </ApolloProvider>
  );
};
export default App;
