import Field from "../../common/Field";
import Suggestion from "../../common/Suggestion";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import {Container,FormContainer} from "./styled";

const PasswordRecovery = (props) => {
  const meta = props.meta;

  return (
    <Container>
      <div>
        {meta}
        <TwitterLogo size="sm"/>
        <h4>MiniTwitter</h4>
        <h1>Recover your password</h1>

        <Field
          inputType="text"
          inputId="userField"
          labelText="Email or Username"
        />

        <Button primary>Recover your password</Button>

       <FormContainer>
          <Suggestion 
            label="Return to "
            linkText="Login"
            linkTo="/Login"
          /> 
       </FormContainer>
        
      </div>
    </Container>  
  );
};

export default PasswordRecovery;
