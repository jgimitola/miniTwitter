import { Link } from "react-router-dom";

import Field from "../../common/Field";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import { Container } from "./styled";

const Login = (props) => {
  const meta = props.meta;

  return (
    <Container>
      <div>
        {meta}

        <TwitterLogo size="sm" />

        <h1>Login to your account</h1>

        <form action="#">
          <Field
            inputType="text"
            inputId="userField"
            labelText="Email or Username"
          />
          <Field
            inputType="password"
            inputId="passwordField"
            labelText="Password"
          />

          <Suggestion
            label=""
            linkText="Forgot password?"
            linkTo="/passwordrecovery"
          />

          <Link to="/home">
            <Button primary>Login now</Button>
          </Link>
        </form>
      </div>

      <Suggestion
        label="Don't have an account?"
        linkText="Join free today"
        linkTo="/signup"
      />
    </Container>
  );
};

export default Login;
