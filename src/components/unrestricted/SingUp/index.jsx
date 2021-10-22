import { useState } from "react";
import { useHistory } from "react-router";

import TwitterLogo from "../../common/TwitterLogo";
import Field from "../../common/Field";
import Button from "../../common/Button";
import Suggestion from "../../common/Suggestion";
import { Main } from "./styled";
import { signUpUser } from "../../../services/userService";

const SingUp = ({ meta }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const handleSignUp = (event) => {
    event.preventDefault();
    signUpUser(name, email, username, password, passwordConfirmation).then(
      (response) => {
        if (response?.status === 200) {
          history.push("/login");
        }
      }
    );
  };

  return (
    <>
      {meta}

      <Main>
        <div>
          <TwitterLogo size="sm" redirectTo="/" />

          <h1>Create your account</h1>

          <form action="#">
            <Field
              labelText={"Name"}
              inputType={"text"}
              inputId={"ca-nameField"}
              setState={setName}
              state={name}
            />

            <Field
              labelText={"Username"}
              inputType={"text"}
              inputId={"ca-usernameField"}
              setState={setUsername}
              state={username}
            />

            <Field
              labelText={"Email"}
              inputType={"text"}
              inputId={"ca-emailField"}
              setState={setEmail}
              state={email}
            />

            <Field
              labelText={"Password"}
              inputType={"password"}
              inputId={"ca-passwordField"}
              setState={setPassword}
              state={password}
            />

            <Field
              labelText={"Password Confirmation"}
              inputType={"password"}
              inputId={"ca-passwordConfirmationField"}
              setState={setPasswordConfirmation}
              state={passwordConfirmation}
            />
          </form>

          <Button primary onClick={handleSignUp}>
            {" "}
            Sign Up
          </Button>
        </div>
        <Suggestion
          label="Already have an account?"
          linkText="Log In"
          linkTo="/login"
        />
      </Main>
    </>
  );
};

export default SingUp;
