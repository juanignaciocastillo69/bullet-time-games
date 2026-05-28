import { useState } from "react";
import Banner from "../components/Banner";
import ConsoleSection from "../components/ConsoleSection";
import GameContainer from "../components/GameContainer";
import HomeFilters from "../components/HomeFilters";

function Home() {
  const [selectedType, setSelectedType] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");

  return (
    <>
      <Banner />

      <HomeFilters
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      {(selectedType === "all" || selectedType === "console") && (
        <ConsoleSection maxPrice={maxPrice} />
      )}

      {(selectedType === "all" || selectedType === "game") && (
        <GameContainer maxPrice={maxPrice} />
      )}
    </>
  );
}

export default Home;