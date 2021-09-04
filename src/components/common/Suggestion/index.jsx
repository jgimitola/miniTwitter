import StyledSuggestion from "../../../lib/ui/StyledSuggestion";

const Suggestion = ({ className, children, ...rest }) => {
  return (
    <StyledSuggestion className={className} {...rest}>
      {children}
    </StyledSuggestion>
  );
};
export default Suggestion;
