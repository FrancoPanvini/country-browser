import React, { useState, useEffect, useContext } from "react";

//? REDUCER
import { GlobalContext } from "../App";
import { actionsTypes } from "../reducer/index";

//? STYLES
import { InputSearch } from "./styles/searchBar.SC";

function SearchBar() {
  const globalContext = useContext(GlobalContext);
  const data = globalContext.state.data;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  //* Si se inserta un texto en la searchbar filtro los resultados de data y los guardo en filteredData
  useEffect(() => {
    if (data.length > 0 && searchInput.length > 0) {
      let filteredData = data.map(item => {
        return {
          name: item.name,
          countries: item.countries.filter(country => country.name.toLowerCase().includes(searchInput.toLowerCase())),
        };
      });
      filteredData = filteredData.filter(item => item.countries.length > 0);
      //* Si no hay resultados seteo una respuesta
      filteredData = filteredData.length === 0 ? [{ name: "No results", countries: [] }] : filteredData;
      
      globalContext.dispatch({ type: actionsTypes.SET_FILTERED_DATA, payload: filteredData });
    }

    //* Cuando el SearchBar se vacia, se resetea el state filtrado a toda la data
    if (data.length > 0 && searchInput.length === 0) {
      globalContext.dispatch({ type: actionsTypes.SET_FILTERED_DATA, payload: data });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, data]);

  return <InputSearch type="search" placeholder="..." onChange={handleChange} value={searchInput} />;
}

export default SearchBar;
