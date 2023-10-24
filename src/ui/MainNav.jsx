import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import SVG from "react-inlinesvg";
import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTv,
} from "../icons/icons";
import { clampBuilder } from "../Styles/clampBuilder";

const NavList = styled.ul`
  margin-top: ${() => clampBuilder(950, 1200, 5, 7)};
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  @media (max-width: 950px) {
    margin-top: 0;
    flex-direction: row;
    align-items: center;
    column-gap: ${() => clampBuilder(350, 1200, 3, 4)};
  }
`;

const StyledNavLink = styled(NavLink)`
  & svg {
    fill: var(--color-blue-grey);
    transition: all 0.3s;

    &:hover {
      fill: var(--color-red);
    }
  }

  &.active:link svg,
  &.active:visited svg {
    fill: var(--color-white);
  }

  &:has(.active) svg {
    fill: #ddd;
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/home">
          <SVG src={IconNavHome} />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/movies">
          <SVG src={IconNavMovies} />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/tv">
          <SVG src={IconNavTv} />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/bookmarks">
          <SVG src={IconNavBookmark} />
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
