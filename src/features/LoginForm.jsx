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
                value: /\S+@\S+\.\S+/,
                message: " Wrong format, Provide valid email!",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message}>
          <Input
            placeholder="••••••••"
            variation="auth"
            type="password"
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

        <AlternativeAuthentication method="Signup" />
      </Form>
    </FormContainer>
  );
}

export default LoginForm;
