import { Link } from "react-router-dom";
import FloatingInput from "../../common/FloatingInput";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import {Container} from "./styled"
const Login = (props) => {
  const meta = props.meta;

  return (
    <Container>
      <div>
      {meta}
      <TwitterLogo size="sm" />
      <h4>My MiniTwitter</h4>
      <h1>Login to your account</h1>
      <form action="#">
        <FloatingInput
          inputType="text"
          inputId="userField"
          labelText="Email or Username"
        />
        <FloatingInput
          inputType="password"
          inputId="passwordField"
          labelText="Password"
        />

        <Link to="/home">
          <Button primary>Login now</Button>
        </Link>
      </form>
      <Suggestion label="" linkText="Forgot password?" linkTo="/signup" />
    </div>
    </Container>
  );
};

export default Login;
