import styled from "styled-components";

import { clampBuilder } from "../Styles/clampBuilder";

const StyledFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0rem 0 2rem;
  align-items: center;
  /* margin-bottom: 3rem; */
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  &:has(input) {
    border-bottom: 3px solid var(--color-white);
  }
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  column-gap: ${() => clampBuilder(950, 1200, 1, 1.5)};
  font-size: ${() => clampBuilder(500, 1200, 1, 1.5)};

  font-style: italic;
`;

function FormRow({ children, error }) {
  return (
    <StyledFormRow>
      {children}

      {error && <Error> {error} </Error>}
    </StyledFormRow>
  );
}

export default FormRow;
