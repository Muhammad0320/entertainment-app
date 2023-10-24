import styled from "styled-components";
import LoginForm from "../features/LoginForm";

const StyledLogin = styled.section`
  height: 100vh;

  display: grid;

  place-items: center;

  background-color: var(--color-blue-dark);
`;

function Login() {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
