import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

//? COMPONENTS
import CountryCard from "./CountryCard";

//?SERVICES
import { GET_COUNTRIES_BY_CONTINENT } from "../services/getAllCountries";

//? REDUCER
import { GlobalContext } from "../App";
import { actionsTypes } from "../reducer/index";

//? STYLES
import { ItemContainer, CardContainer } from "./styles/countryDisplayer.SC";

function CountryDisplayer() {
  const globalContext = useContext(GlobalContext);
  //* Obtengo los countries del state
  const items = globalContext.state.data.continents;

  //* Obtengo los countries del graph, los almaceno en el state y seteo una respuesta para loading y para error
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENT);
  useEffect(() => {
    data && globalContext.dispatch({ type: actionsTypes.SET_DATA, payload: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ItemContainer>
      {items &&
        items.map(item => {
          return (
            <div key={item.code}>
              <h1>{item.name}</h1>
              <CardContainer>
                {item.countries.map(country => {
                  return (
                    <CountryCard
                      key={country.code}
                      emoji={country.emoji}
                      name={country.name}
                      native={country.native}
                      capital={country.capital}
                    />
                  );
                })}
              </CardContainer>
            </div>
          );
        })}
    </ItemContainer>
  );
}

export default CountryDisplayer;
