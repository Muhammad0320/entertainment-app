import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-red);

  color: var(--color-white);

  text-align: center;

  padding: 1.2rem 2rem;

  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-dark);

    background-color: var(--color-white);
  }
`;

export default Button;
