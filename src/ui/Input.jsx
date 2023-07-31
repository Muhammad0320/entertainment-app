import { styled } from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;

  width: 80%;
  padding: 1rem 0;
  font-size: 2.4rem;
  caret-color: var(--color-red);
  font-weight: 300;
  color: var(--color-white);

  border: none;

  &::-webkit-input-placeholder {
    font-size: 2rem;
    opacity: 0.5;
    color: var(--color-white);
    font-size: 2.5rem;
    font-weight: 100;
  }

  &:focus {
    outline: none;

    border-bottom: 1px solid var(--color-blue-grey);
  }
`;

function Input({ placeholder, onChange, value }) {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
}

export default Input;
