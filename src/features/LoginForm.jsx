import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";
import Heading from "../ui/Heading";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AlternativeAuthentication from "../ui/AlternativeAuthentication";
import { useForm } from "react-hook-form";

const StyledForm = styled.div`
  padding-block: ${() => clampBuilder(350, 1200, 2, 3)};
  border-radius: ${() => clampBuilder(350, 1200, 1, 1.5)};
  padding-inline: ${() => clampBuilder(350, 1200, 1.5, 2.5)};

  background-color: var(--color-blue-dark);

  width: ${() => clampBuilder(350, 1200, 25, 45)};
`;

function LoginForm() {
  const { register, formState, reset, handleSubmit } = useForm();

  const { errors } = formState;

  const onSubmit = () => {
    reset();
  };

  return (
    <StyledForm>
      <Heading> Login </Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.email?.message}>
          <Input
            placeholder="Email address"
            variation="auth"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value:
                  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: " Wrong format, Provide valid email!",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message}>
          <Input
            placeholder="••••••••"
            variation="auth"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: `Password length should be greater than or equals 8 `,
              },
            })}
          />
        </FormRow>

        <Button variation="auth"> Login to your account </Button>

        <AlternativeAuthentication method="Login" />
      </Form>
    </StyledForm>
  );
}

export default LoginForm;
