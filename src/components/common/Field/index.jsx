import StyledField from "../../../lib/ui/StyledField";

const { Container, Input, Label } = StyledField;

const Field = (props) => {
  const { labelText, inputType, inputId } = props;

  return (
    <Container>
      <Input type={inputType} id={inputId} />
      <Label for={inputId}>{labelText}</Label>
    </Container>
  );
};

export default Field;
