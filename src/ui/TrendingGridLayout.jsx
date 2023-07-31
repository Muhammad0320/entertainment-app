import GridItem from "./GridItem";
import { StyledList } from "./StyledList";
import Heading from "./Heading";
import data from "./Test";

function TrendingGridLayout() {
  const trend = data.filter((data) => data.isTrending);

  return (
    <>
      <Heading> Trending </Heading>
      <StyledList layout="repeat(3, 1fr)">
        {trend.map((item) => (
          <GridItem trend="trend" data={item} key={item.title} />
        ))}
      </StyledList>
    </>
  );
}

export default TrendingGridLayout;
