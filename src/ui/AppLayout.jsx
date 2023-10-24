import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledApp = styled.div`
  min-height: 100dvh;
  /* padding: 3rem; */
  padding-inline-end: 0;
  display: grid;
  grid-template-columns: 10rem 1fr;

  @media (max-width: 950px) {
    grid-template-columns: none;

    row-gap: ${() => clampBuilder(350, 950, 1.5, 3)};

    padding-inline: ${() => clampBuilder(350, 950, 1.5, 2.5)};

    padding-block: ${() => clampBuilder(350, 1200, 1, 2)};

    grid-template-rows: 5rem 1fr;
  }

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const StyledMain = styled.main`
  padding: 2.5rem;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  overflow: auto;

  /* @media (max-width: 950px) {
    padding: 0;
  } */
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
