import { styled } from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledHeading = styled.h3`
  font-weight: 300;
  font-size: ${() => clampBuilder(350, 1200, 1.8, 3.2)};
  color: var(--color-white);
  position: relative;
  margin-block-end: ${() => clampBuilder(350, 1200, 2.5, 3.5)};
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
