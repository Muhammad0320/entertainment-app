import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledApp = styled.div`
  min-height: 100dvh;
  padding: 4rem;
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 6rem 1fr;
  row-gap: 2rem;
  column-gap: 3.5rem;
`;

const StyledMain = styled.main`
  padding: 2rem;
  grid-column: 2 / -1;
  grid-row: 1 / -1;
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
