import React from "react";

//? STYLES
import { CardContainer } from "./styles/countryCard.SC";

function CountryCard({ emoji, name, native, capital }) {
  return (
    <CardContainer>
      <h2>
        {emoji} {name}
      </h2>
      <h3>{native}</h3>
      <h3>{capital}</h3>
    </CardContainer>
  );
}

export default CountryCard;
