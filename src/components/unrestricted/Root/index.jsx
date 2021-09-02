import { Link } from "react-router-dom";

import Button from "../../../lib/ui/Button";
import TwitterLogo from "../../../lib/ui/TwitterLogo";
import Suggestion from "../../../lib/ui/Suggestion";
import Container from "../../../lib/ui/Container";
import Row from "../../../lib/ui/Row";
import FormContainer from "../../../lib/ui/FormContainer";

const Root = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}

      <Row>
        <Container backgroundColor="blue">
          <TwitterLogo size="lg" white />
        </Container>

        <Container>
          <FormContainer>
            <TwitterLogo size="sm" />

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
        </Container>
      </Row>
    </div>
  );
};

export default Root;
