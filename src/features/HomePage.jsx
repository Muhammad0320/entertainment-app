import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Heading from "../ui/Heading";

import Header from "../ui/Header";

import TrendingGridLayout from "../ui/TrendingGridLayout";
import { useState } from "react";
import data from "../ui/Test";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const movieData = searchQuery
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data;

  return (
    <>
      <Header
        placeholder="Search for movies or TV series"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {!searchQuery && <TrendingGridLayout />}

      <Heading>
        {" "}
        {searchQuery
          ? `Found ${movieData.length} for '${searchQuery}' `
          : "Recommended for you"}{" "}
      </Heading>

      <StyledList layout="repeat(auto-fit, minmax(25rem, 1fr))">
        {movieData.map((item) => (
          <GridItem data={item} key={item.title} />
        ))}
      </StyledList>
    </>
  );
}

export default HomePage;
