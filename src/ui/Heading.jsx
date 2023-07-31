import { styled } from "styled-components";

const StyledHeading = styled.h3`
  font-weight: 300;
  font-size: 3.2rem;
  color: var(--color-white);
  position: relative;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
