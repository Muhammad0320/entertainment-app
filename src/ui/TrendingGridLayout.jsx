import GridItem from "./GridItem";

import Heading from "./Heading";
import data from "./Test";
import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const TrendingContainer = styled.div`
  display: grid;
  grid-auto-flow: column;

  grid-auto-columns: 47%;

  overflow-x: auto;

  scroll-snap-type: x mandatory;

  column-gap: ${() => clampBuilder(320, 1200, 2, 3)};

  @media (max-width: 900px) {
    grid-auto-columns: 57%;
  }

  @media (max-width: 500px) {
    grid-auto-columns: 79%;
  }
`;

function TrendingGridLayout() {
  const trend = data.filter((data) => data.isTrending);

  return (
    <>
      <Heading> Trending </Heading>
      <TrendingContainer>
        {trend.map((item) => (
          <GridItem trend="trend" data={item} key={item.title} />
        ))}
      </TrendingContainer>
    </>
  );
}

export default TrendingGridLayout;
