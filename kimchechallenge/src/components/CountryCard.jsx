import React from "react";

//? STYLES
import { CardContainer } from "./styles/countryCard.SC";

function CountryCard({ emoji, name, native, capital, phone }) {
  return (
    <CardContainer>
      <h2>
        {emoji} {name}
      </h2>
      <h3>{native}</h3>
      <h3><span>capital: </span>{capital}</h3>
      <h3><span>phone: </span>+{phone}</h3>
    </CardContainer>
  );
}

export default CountryCard;
