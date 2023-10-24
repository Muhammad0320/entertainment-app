import { css, styled } from "styled-components";

import SVG from "react-inlinesvg";
import {
  TvIcon,
  MovieIcon,
  PlayIcon,
  BookmarkFull,
  BookmarkEmpty,
} from "../icons/icons";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledList = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr ${() => clampBuilder(350, 1200, 4.5, 6.5)};
  overflow: hidden;

  ${(props) =>
    props.trend === "trend" &&
    css`
      scroll-snap-align: start;
    `}
`;

const Image = styled.img`
  width: 100%;
  border-radius: ${() => clampBuilder(350, 1200, 1, 1.5)};

  z-index: -1;
  display: block;
  object-fit: cover;
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  ${(props) =>
    props.trend === "trend" &&
    css`
      aspect-ratio: 12 /6;
    `}
`;

const Figure = styled.figure`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  color: var(--color-white);
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &:hover img {
    filter: brightness(75%);
  }

  &:hover figcaption {
    visibility: visible;
    scale: 1;
  }
`;

const FigCaption = styled.figcaption`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
  scale: 0.1;
  visibility: hidden;

  border-radius: ${() => clampBuilder(350, 1200, 1.5, 3)};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  font-size: ${() => clampBuilder(350, 1200, 1, 2)};
  padding: 0.8rem 1.8rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

  transition: visibility 0.2s ease, scale 0.24s;
`;

const Icon = styled.p`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  padding: ${() => clampBuilder(350, 1200, 1, 1.6)};
  margin: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  justify-self: end;

  align-self: start;
  cursor: pointer;
  transition: stroke 0.3s;

  &:hover {
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    );
    stroke: var(--color-primary);
  }
`;

const MovieInfo = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;

  margin: 1rem;
  margin-bottom: 0.5rem;
  justify-self: start;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  ${(props) =>
    props.trend === "trend" &&
    css`
      grid-row: 1 / 2;
      grid-column: 1 / -1;

      /* padding: 0.5rem; */
      font-size: ${() => clampBuilder(350, 1200, 1, 2)};
      align-self: end;
      justify-self: start;
    `}
`;

const MovieDetails = styled.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  column-gap: 1rem;
  font-weight: 200;
  font-size: ${() => clampBuilder(350, 1200, 0.8, 1.3)};
  color: var(--color-white);
  opacity: 0.8;

  ${(props) =>
    props.trend === "trend" &&
    css`
      font-size: ${() => clampBuilder(350, 1200, 1.2, 1.6)};
    `}
`;

const MovieName = styled.div`
  color: var(--color-white);
  font-size: ${() => clampBuilder(350, 1200, 1.2, 2.2)};
  font-weight: 400;
  /* margin-top: -2.5rem; */
  grid-column: 1 / -1;
  line-height: 1;
  ${(props) =>
    props.trend === "trend" &&
    css`
      font-size: ${() => clampBuilder(350, 1200, 1.5, 2.7)};
    `}
`;

const CantegoryIconContainer = styled.p`
  display: flex;
  justify-content: space-between;
  column-gap: ${() => clampBuilder(350, 1200, 0.4, 1)};
  align-items: center;
`;

function GridItem({ trend, data }) {
  const {
    title,
    category,
    isBookmarked,
    rating,
    year,
    thumbnail: {
      regular: { large },
    },
  } = data;

  const CategoryIcon = category === "Movie" ? MovieIcon : TvIcon;

  const BookmarkIcon = isBookmarked ? BookmarkFull : BookmarkEmpty;

  return (
    <StyledList trend={trend}>
      <Figure>
        <Image src={large} alt="Image of movie" trend={trend} />
        <FigCaption>
          <SVG src={PlayIcon} />
          <span> play </span>
        </FigCaption>
      </Figure>

      <Icon>
        <SVG src={BookmarkIcon} />
      </Icon>

      <MovieInfo trend={trend}>
        <MovieDetails trend={trend}>
          <p> {year} </p>
          <CantegoryIconContainer>
            <SVG src={CategoryIcon} />
            <span> {category} </span>
          </CantegoryIconContainer>
          <span> {rating} </span>
        </MovieDetails>
        <MovieName trend={trend}>{title}</MovieName>
      </MovieInfo>
    </StyledList>
  );
}

export default GridItem;
