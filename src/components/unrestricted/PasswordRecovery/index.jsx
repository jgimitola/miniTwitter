import { useEffect } from "react";

import Field from "../../common/Field";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";

const PasswordRecovery = ({ meta, setMainTarget, ...rest }) => {
  useEffect(() => {
    setMainTarget("passwordrecovery");
  }, [setMainTarget]);

  return (
    <>
      {meta}

      <div>
        <TwitterLogo size="sm" redirectTo="/" />

        <h1>Recover your password</h1>

        <Field
          inputType="text"
          inputId="userField"
          labelText="Email or Username"
        />

        <Button primary>Recover your password</Button>
      </div>
      <Suggestion label="Return to " linkText="Login" linkTo="/login" />
    </>
  );
};

export default PasswordRecovery;
