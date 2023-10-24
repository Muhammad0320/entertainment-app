import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledSidebar = styled.aside`
  text-align: center;

  grid-column: 1 / 2;
  border-radius: ${() => clampBuilder(950, 1200, 1, 2)};
  padding-block: ${() => clampBuilder(950, 1200, 2.5, 4)};
  height: 95dvh;
  background-color: var(--color-blue-dark);
  display: grid;
  grid-template-rows: 3.2rem repeat(4, min-content) 1fr;

  margin: 2rem 0 0 2rem;
  /* justify-content: center; */

  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    height: max-content;
    grid-row: 1 / 2;
    padding: ${() => clampBuilder(350, 950, 1, 1.5)}
      ${() => clampBuilder(350, 950, 1.2, 2)};

    justify-content: space-between;
  }

  @media (max-width: 500px) {
    margin: 0;
    border-radius: 0;
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
