import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledSidebar = styled.aside`
  /* grid-row: 1 / -1; */
  text-align: center;
  grid-column: 1 / 2;
  border-radius: 2.5rem;
  padding-block: ${() => clampBuilder(950, 1200, 2.5, 4)};
  height: 100dvh;
  background-color: var(--color-blue-dark);
  display: grid;
  grid-template-rows: 3.2rem repeat(4, min-content) 1fr;

  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    height: max-content;
    grid-row: 1 / 2;
    padding: ${() => clampBuilder(350, 950, 1, 1.5)}
      ${() => clampBuilder(350, 950, 1.2, 2)};

    justify-content: space-between;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Avatar />
    </StyledSidebar>
  );
}

export default Sidebar;
