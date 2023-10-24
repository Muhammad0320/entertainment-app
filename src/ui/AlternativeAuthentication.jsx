import { NavLink } from "react-router-dom";
import { clampBuilder } from "../Styles/clampBuilder";
import styled from "styled-components";

const StyledAuth = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  font-size: ${() => clampBuilder(350, 1200, 0.8, 1.6)};

  column-gap: ${() => clampBuilder(350, 1200, 1, 2)};

  & > a {
    color: var(--color-red);
  }
`;

function AlternativeAuthentication({ method }) {
  const methodText =
    method === "Login" ? "Don't have an account?" : "Already have an account?";

  const to = method === "Login" ? "/signup" : "/login";

  return (
    <StyledAuth>
      <span> {methodText} </span>
      <NavLink to={to}> {method} </NavLink>
    </StyledAuth>
  );
}

export default AlternativeAuthentication;
