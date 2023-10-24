import { css, styled } from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const Input = styled.input`
  background-color: transparent;

  width: 80%;
  padding-block-end: 1rem;
  font-size: ${() => clampBuilder(350, 1200, 1, 2)};
  caret-color: var(--color-red);
  font-weight: 300;
  color: var(--color-white);

  border: none;

  &::-webkit-input-placeholder {
    font-size: ${() => clampBuilder(350, 1200, 1.5, 2.5)};
    opacity: 0.5;
    color: var(--color-white);
    font-size: ${() => clampBuilder(350, 1200, 1, 2)};
    font-weight: 100;
  }

  &:focus {
    outline: transparent;

    border-bottom: 1px solid var(--color-blue-grey);
  }

  ${(props) =>
    props.variation === "auth" &&
    css`
      width: 70%;
    `}
`;

export default Input;
