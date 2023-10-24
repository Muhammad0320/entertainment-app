import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const Form = styled.form`
  display: flex;

  flex-direction: column;

  row-gap: ${() => clampBuilder(350, 1200, 1.5, 2.2)};

  background-color: var(--color-primary);
`;

export default Form;
