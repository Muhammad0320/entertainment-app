import { useState } from "react";
import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Heading from "../ui/Heading";
import data from "../ui/Test";
import Header from "../ui/Header";

function TvSeries() {
  const [searchQuery, setSearchQuery] = useState("");

  const tv = data.filter((data) => data.category !== "Movie");

  const filteredTv = searchQuery
    ? tv.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tv;

  return (
    <>
      <Header
        placeholder="Search TV Series"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Heading>
        {" "}
        {searchQuery
          ? `Found ${filteredTv.length} for '${searchQuery}' `
          : "TV Series"}{" "}
      </Heading>

      <StyledList layout="repeat(auto-fit, minmax(25rem, 1fr))">
        {filteredTv.map((tv) => (
          <GridItem data={tv} key={tv.title} />
        ))}
      </StyledList>
    </>
  );
}

export default TvSeries;
