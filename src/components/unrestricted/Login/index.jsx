import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";

import { loginUser } from "../../../services/userService";
import { AuthContext } from "../../../context/AuthContext";

import Field from "../../common/Field";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import { success, error } from "../../../lib/ui/Toasts";

const Login = ({ meta, setMainTarget, ...rest }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const auth = useContext(AuthContext);

  useEffect(() => {
    setMainTarget("login");
  }, [setMainTarget]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (!!username && !!password) {
      loginUser(username, password)
        .then((response) => {
          switch (response.data.message) {
            case "ok":
              const user = response.data.data;
              success("Logged In!");
              auth.login(user);
              setTimeout(() => {
                history.push("/home");
              }, 2000);

              break;
            default:
              error("User or password is incorrect");
              break;
          }
        })
        .catch((err) => {
          error(err.toString());
        });
    } else {
      error("User and password must be provided.");
    }
  };

  return (
    <>
      {meta}

      <div>
        <TwitterLogo size="sm" redirectTo="/" />

        <h1>Login to your account</h1>

        <form action="#">
          <Field
            inputType="text"
            inputId="userField"
            labelText="Email or Username"
            state={username}
            setState={setUsername}
          />
          <Field
            inputType="password"
            inputId="passwordField"
            labelText="Password"
            state={password}
            setState={setPassword}
          />

          <Suggestion
            label=""
            linkText="Forgot password?"
            linkTo="/passwordrecovery"
          />

          <Button primary onClick={handleLogin}>
            Login now
          </Button>
        </form>
      </div>
      <Suggestion
        label="Don't have an account?"
        linkText="Join free today"
        linkTo="/signup"
      />
    </>
  );
};

export default Login;
