import React from "react";

//? COMPONENTS
import CountryCard from "./CountryCard";

//? STYLES
import { CardContainer } from "./styles/countryDisplayer.SC";

function CountryDisplayer() {
  return (
    <CardContainer>
      <CountryCard />
    </CardContainer>
  );
}

export default CountryDisplayer;
