import StyledInput from "../../../lib/ui/StyledInput";

const { Container, Input, Label } = StyledInput;

const FloatingInput = (props) => {
  const {labelText, inputType, inputId} = props;
    return (
    <Container>
      <Input type={inputType} id={inputId}/>
      <Label>{labelText}</Label>
    </Container>
  );
};

export default FloatingInput;
