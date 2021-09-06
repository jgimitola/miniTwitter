import Field from "../../common/Field";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import { Main } from "./styled";

const PasswordRecovery = ({ meta }) => {
  return (
    <>
      {meta}
      <Main>
        <div>
          <TwitterLogo size="sm" />

          <h1>Recover your password</h1>

          <Field
            inputType="text"
            inputId="userField"
            labelText="Email or Username"
          />

          <Button primary>Recover your password</Button>
        </div>
        <Suggestion label="Return to " linkText="Login" linkTo="/login" />
      </Main>
    </>
  );
};

export default PasswordRecovery;
