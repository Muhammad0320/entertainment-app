import styled from "styled-components";

const StyledForm = styled.div`
  padding-block: ${() => clampBuilder(350, 1200, 2, 3)};

  padding-inline: ${() => clampBuilder(350, 1200, 1.5, 2.5)};
`;

function LoginForm() {
  return <div></div>;
}

export default LoginForm;
