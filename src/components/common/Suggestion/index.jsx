import StyledSuggestion from "../../../lib/ui/StyledSuggestion";

const { Container, StyledP, StyledLink } = StyledSuggestion;

const Suggestion = (props) => {
  const { label, linkText, linkTo } = props;
  return (
    <Container>
      <StyledP>
        {label} <StyledLink to={linkTo}>{linkText}</StyledLink>
      </StyledP>
    </Container>
  );
};
export default Suggestion;
