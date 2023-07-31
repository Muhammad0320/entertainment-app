import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: ${(props) => props.layout};

  grid-gap: 4rem;
`;
