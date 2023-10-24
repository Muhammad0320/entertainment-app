import { styled } from "styled-components";

const StyledImage = styled.img`
  width: 4rem;
  height: 4rem;
  box-sizing: content-box;
  border-radius: 50%;
  grid-row: 4 / -1;
  align-self: end;
  justify-self: center;
  border: 2px solid var(--color-white);

  @media (max-width: 950px) {
    margin-block: auto;
  }
`;

function Avatar() {
  return <StyledImage src="/image-avatar.png" />;
}

export default Avatar;
