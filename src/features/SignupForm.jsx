import Heading from "../ui/Heading";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AlternativeAuthentication from "../ui/AlternativeAuthentication";
import { useForm } from "react-hook-form";
import { FormContainer } from "../ui/FormContainer";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { register, formState, reset, handleSubmit, getValues } = useForm();

  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = () => {
    reset();

    navigate("/home");
  };

  return (
    <FormContainer>
      <Heading> Create Account </Heading>

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
            type="password"
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

        <FormRow error={errors?.passwordConfirm?.message}>
          <Input
            placeholder="••••••••"
            type="password"
            variation="auth"
            {...register("passwordConfirm", {
              required: "This field is required",

              validate: (value) =>
                value === getValues().password || "Passwords should be equal",
            })}
          />
        </FormRow>

        <Button variation="auth"> Create a new account </Button>

        <AlternativeAuthentication method="Login" />
      </Form>
    </FormContainer>
  );
}

export default SignupForm;
