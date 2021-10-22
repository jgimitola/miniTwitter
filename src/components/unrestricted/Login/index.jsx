import { useState, useContext } from "react";
import { useHistory } from "react-router";

import Field from "../../common/Field";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import { Main } from "./styled";
import { loginUser } from "../../../services/userService";
import { AuthContext } from "../../../context/AuthContext";

const Login = ({ meta }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const { isLoggedIn, user } = useContext(AuthContext);
  const history = useHistory();
  const isAuth = isLoggedIn();

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(username, password)
      .then((response) => {
        if (response?.data.message === "ok") {
          const user = response.data.data;
          auth.login(user);
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      {meta}
      <Main>
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

            {/*<Link to="/home">*/}
            <Button primary onClick={handleLogin}>
              Login now
            </Button>
            {/*</Link>*/}
          </form>
        </div>
        <Suggestion
          label="Don't have an account?"
          linkText="Join free today"
          linkTo="/signup"
        />
      </Main>
    </>
  );
};

export default Login;
