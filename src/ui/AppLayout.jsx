import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledApp = styled.div`
  min-height: 100dvh;
  padding: 4rem;
  padding-inline-end: 0;
  display: grid;
  grid-template-columns: 10rem 1fr;

  column-gap: ${() => clampBuilder(350, 950, 2.5, 3.5)};

  @media (max-width: 950px) {
    grid-template-columns: none;

    row-gap: ${() => clampBuilder(350, 950, 1.5, 3)};

    grid-template-rows: 5rem 1fr;
  }
`;

const StyledMain = styled.main`
  padding: 2rem;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  overflow: auto;
`;

function AppLayout() {
  return (
    <StyledApp>
      <Sidebar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledApp>
  );
}

export default AppLayout;
