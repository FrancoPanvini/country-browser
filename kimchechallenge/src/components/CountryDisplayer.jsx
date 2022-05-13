import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

//? COMPONENTS
import CountryCard from "./CountryCard";

//?SERVICES
import { GET_COUNTRIES_BY_CONTINENT, GET_COUNTRIES } from "../services/getAllCountries";

//? REDUCER
import { GlobalContext } from "../App";
import { actionsTypes } from "../reducer/index";

//? STYLES
import { ItemContainer, CardContainer } from "./styles/countryDisplayer.SC";

function CountryDisplayer() {
  const globalContext = useContext(GlobalContext);
  //* Obtengo los countries y el order del state
  const order = globalContext.state.order;
  const items = globalContext.state.filteredData;

  //* Obtengo los countries del graph, los almaceno en el state y seteo una respuesta para loading y para error
  const { loading, error, data, refetch } = useQuery(order === "continent" ? GET_COUNTRIES_BY_CONTINENT : GET_COUNTRIES);

  useEffect(() => {
    //* Refetch cuando cambia el order
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    if (order === "continent") {
      data && globalContext.dispatch({ type: actionsTypes.SET_DATA, payload: data.continents });
    }
    if (order === "language") {
      //* Agrupo la data de countries por lenguaje y doy formato a la data [{language: "es", countries: [{...}, {...}]}]
      let orderData = {};
      data.countries &&
        data.countries.forEach(countrie => {
          const { languages, ...newCountrie } = countrie;
          languages.forEach(language => {
            orderData[language.name] = orderData[language.name] ? [...orderData[language.name], newCountrie] : [newCountrie];
          });
        });
      orderData = Object.keys(orderData)
        .sort()
        .map(language => ({ name: language, countries: orderData[language] }));

      orderData && globalContext.dispatch({ type: actionsTypes.SET_DATA, payload: orderData });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, order]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ItemContainer>
      {items &&
        items.map(item => {
          return (
            <ItemContainer key={item.name}>
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
                      phone={country.phone}
                      currency={country.currency}
                    />
                  );
                })}
              </CardContainer>
            </ItemContainer>
          );
        })}
    </ItemContainer>
  );
}

export default CountryDisplayer;
