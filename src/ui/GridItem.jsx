import { css, styled } from "styled-components";

import SVG from "react-inlinesvg";
import {
  TvIcon,
  MovieIcon,
  PlayIcon,
  BookmarkFull,
  BookmarkEmpty,
} from "../icons/icons";

const StyledList = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 6.5rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1.5rem;
  height: 100%;
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
    filter: brightness(80%);
  }

  &:hover p {
    visibility: visible;
  }
`;

const FigCaption = styled.p`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
  visibility: hidden;

  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  font-size: 2rem;
  padding: 0.8rem 1.8rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

const Icon = styled.p`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  padding: 1.6rem;
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
  gap: 3rem;
  flex-direction: column;

  ${(props) =>
    props.trend === "trend" &&
    css`
      grid-row: 1 / 2;
      grid-column: 1 / -1;
      row-gap: 2.5rem;
      padding: 0.5rem;
      font-size: 2rem;
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
  font-size: 1.3rem;
  color: var(--color-white);
  opacity: 0.8;

  ${(props) =>
    props.trend === "trend" &&
    css`
      font-size: 1.6rem;
    `}
`;

const MovieName = styled.div`
  color: var(--color-white);
  font-size: 2.2rem;
  font-weight: 400;
  margin-top: -2.5rem;
  grid-column: 1 / -1;
  line-height: 1;
  ${(props) =>
    props.trend === "trend" &&
    css`
      font-size: 2.7rem;
    `}
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
    <StyledList>
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
          <p>
            <SVG src={CategoryIcon} />
            <span> {category} </span>
          </p>
          <span> {rating} </span>
        </MovieDetails>
        <MovieName trend={trend}>{title}</MovieName>
      </MovieInfo>
    </StyledList>
  );
}

export default GridItem;
