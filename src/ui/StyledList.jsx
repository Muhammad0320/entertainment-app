import { styled } from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: ${(props) => props.layout};

  grid-gap: ${() => clampBuilder(350, 1200, 2, 4)};
`;
