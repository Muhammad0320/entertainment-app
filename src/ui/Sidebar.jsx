import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Avatar from "./Avatar";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  text-align: center;
  grid-column: 1 / 2;
  border-radius: 2.5rem;
  padding: 4rem 0;
  height: 100dvh;
  background-color: var(--color-blue-dark);
  display: grid;
  grid-template-rows: 3.2rem repeat(4, min-content) 1fr;
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
