import { Link } from "react-router-dom";
import { useEffect } from "react";

import Button from "../../common/Button";
import TwitterLogo from "../../common/TwitterLogo";
import Suggestion from "../../common/Suggestion";
import { Wrapper, FormContainer } from "./styled";

const Root = ({ meta, setMainTarget, ...rest }) => {
  useEffect(() => {
    setMainTarget("root");
  }, [setMainTarget]);

  return (
    <>
      {meta}

      <Wrapper backgroundColor="blue">
        <TwitterLogo size="lg" variant="white" titleDisplay="none" />
      </Wrapper>

      <Wrapper>
        <FormContainer>
          <TwitterLogo
            size="sm"
            titleDisplay="none"
            redirectTo="/"
          ></TwitterLogo>

          <h1>Welcome to MiniTwitter</h1>

          <Link to="/login">
            <Button white>Log In</Button>
          </Link>

          <Suggestion
            label="Don't have an account?"
            linkText="Join free today"
            linkTo="/signup"
          />

          <Link to="/signup">
            <Button white>Sign Up</Button>
          </Link>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default Root;
