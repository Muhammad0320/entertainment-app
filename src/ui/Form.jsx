import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const Form = styled.form`
  padding-block: ${() => clampBuilder(350, 1200, 2, 3)};

  padding-inline: ${() => clampBuilder(350, 1200, 1.5, 2.5)};
`;

export default Form;
