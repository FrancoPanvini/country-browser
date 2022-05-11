import React from "react";

//? COMPONENTS
import CountryDisplayer from "./CountryDisplayer";

//? STYLES
import { HomeContainer } from "./styles/home.SC";

function Home() {
  return (
    <HomeContainer>
      <h1>Country Browser</h1>
      <h4>Which country are you looking for?</h4>
      <input type="search" />
      <h4>Group by?</h4>
      <div>
        <input type="button" value="Continent" />
        <input type="button" value="Language" />
      </div>
      <CountryDisplayer />
    </HomeContainer>
  );
}

export default Home;
