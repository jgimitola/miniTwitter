import TwitterLogo from "../../common/TwitterLogo";
import Field from "../../common/Field";
import Button from "../../common/Button";
import Suggestion from "../../common/Suggestion";
import { Container } from "./styled";

const SingUp = (props) => {
  const meta = props.meta;

  return (
    <Container>
      {meta}

      <div>
        <TwitterLogo size="sm" />

        <h1>Create your account</h1>

        <form action="#">
          <Field
            labelText={"Name"}
            inputType={"text"}
            inputId={"ca-nameField"}
          />

          <Field
            labelText={"Username"}
            inputType={"text"}
            inputId={"ca-usernameField"}
          />

          <Field
            labelText={"Email"}
            inputType={"email"}
            inputId={"ca-emailField"}
          />

          <Field
            labelText={"Password"}
            inputType={"password"}
            inputId={"ca-passwordField"}
          />

          <Field
            labelText={"Password Confirmation"}
            inputType={"password"}
            inputId={"ca-passwordConfirmationField"}
          />
        </form>

        <Button primary> Sign Up</Button>
      </div>
      <Suggestion
        label="Already have an account ?"
        linkText="Log In"
        linkTo="/login"
      />
    </Container>
  );
};

export default SingUp;
