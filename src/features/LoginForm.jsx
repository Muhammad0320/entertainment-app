import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";
import Heading from "../ui/Heading";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AlternativeAuthentication from "../ui/AlternativeAuthentication";

const StyledForm = styled.div`
  padding-block: ${() => clampBuilder(350, 1200, 2, 3)};
  border-radius: ${() => clampBuilder(350, 1200, 1, 1.5)};
  padding-inline: ${() => clampBuilder(350, 1200, 1.5, 2.5)};

  background-color: var(--color-blue-dark);
`;

function LoginForm() {
  return (
    <StyledForm>
      <Heading> Login </Heading>

      <Form>
        <FormRow>
          <Input placeholder="Email address" />
        </FormRow>

        <FormRow>
          <Input placeholder="••••••••" />
        </FormRow>

        <Button variation="auth"> Login to your account </Button>

        <AlternativeAuthentication method="Login" />
      </Form>
    </StyledForm>
  );
}

export default LoginForm;
