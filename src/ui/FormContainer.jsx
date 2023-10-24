import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

export const FormContainer = styled.div`
  padding-block: ${() => clampBuilder(350, 1200, 2, 3)};
  border-radius: ${() => clampBuilder(350, 1200, 1, 1.5)};
  padding-inline: ${() => clampBuilder(350, 1200, 1.5, 2.5)};

  background-color: var(--color-blue-dark);

  width: ${() => clampBuilder(350, 1200, 25, 45)};
`;
