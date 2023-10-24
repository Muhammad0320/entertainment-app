import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const Button = styled.button`
  background-color: var(--color-red);

  color: var(--color-white);

  text-align: center;

  outline: transparent;

  border: none;

  border-radius: ${() => clampBuilder(350, 1200, 0.7, 1)};

  padding: 1.2rem 2rem;

  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-dark);

    background-color: var(--color-white);
  }
`;

export default Button;
