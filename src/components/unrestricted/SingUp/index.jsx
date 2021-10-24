import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { signUpUser } from "../../../services/userService";

import TwitterLogo from "../../common/TwitterLogo";
import Field from "../../common/Field";
import Button from "../../common/Button";
import Suggestion from "../../common/Suggestion";
import { success, error } from "../../../lib/ui/Toasts";

const SingUp = ({ meta, setMainTarget, ...rest }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const history = useHistory();

  useEffect(() => {
    setMainTarget("signup");
  }, [setMainTarget]);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (
      !!name &&
      !!email &&
      !!username &&
      !!password &&
      !!passwordConfirmation
    ) {
      signUpUser(name, email, username, password, passwordConfirmation)
        .then((response) => {
          if (response && response.status === 200) {
            success("New user created");
            setTimeout(() => {
              history.push("/login");
            }, 2000);
          } else {
            response.response.data.message.forEach(async (m, i) => {
              await setTimeout(() => {
                error(m);
              }, 200 + i * 300);
            });
          }
        })
        .catch((e) => {
          error(e.toString());
        });
    } else {
      error("All fields must be filled");
    }
  };

  return (
    <>
      {meta}

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
          Sign Up
        </Button>
      </div>
      <Suggestion
        label="Already have an account?"
        linkText="Log In"
        linkTo="/login"
      />
    </>
  );
};

export default SingUp;
