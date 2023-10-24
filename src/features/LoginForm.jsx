import Heading from "../ui/Heading";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AlternativeAuthentication from "../ui/AlternativeAuthentication";
import { useForm } from "react-hook-form";
import { FormContainer } from "../ui/FormContainer";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { register, formState, reset, handleSubmit } = useForm();

  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = () => {
    reset();
    navigate("/home");
  };

  return (
    <FormContainer>
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
    </FormContainer>
  );
}

export default LoginForm;
