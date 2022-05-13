import React from "react";

//? COMPONENTS
import CountryDisplayer from "./CountryDisplayer";
import OrderButton from "./OrderButton";
import SearchBar from "./SearchBar";

//? STYLES
import { HomeContainer,Title,Order } from "./styles/home.SC";

function Home() {
  return (
    <HomeContainer>
      <Title>Country Browser</Title>
      <h4>Which country are you looking for?</h4>
      <SearchBar />
      <h4>Group by?</h4>
      <Order>
        <OrderButton value="continent" text="Continent" />
        <OrderButton value="language" text="Language" />
      </Order>
      <CountryDisplayer />
    </HomeContainer>
  );
}

export default Home;
