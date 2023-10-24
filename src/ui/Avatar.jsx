import { styled } from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledImage = styled.img`
  width: ${() => clampBuilder(350, 1200, 2.5, 4)};
  height: ${() => clampBuilder(350, 1200, 2.5, 4)};
  box-sizing: content-box;
  border-radius: 50%;
  grid-row: 4 / -1;
  align-self: end;
  justify-self: center;
  border: 2px solid var(--color-white);

  @media (max-width: 950px) {
    margin-block: auto;
    border-width: 1px;
  }
`;

function Avatar() {
  return <StyledImage src="/image-avatar.png" />;
}

export default Avatar;
