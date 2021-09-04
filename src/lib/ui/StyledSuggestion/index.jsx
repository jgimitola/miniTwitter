import styled from "styled-components";
import { Link } from "react-router-dom";

import { primary, paragraph_gray } from "../colors";

const StyledLink = styled(Link)`
  color: ${primary};
  text-decoration: none;
`;

const StyledP = styled.p`
  color: ${paragraph_gray};
`;

const Suggestion = ({ className, label, linkText, linkTo }) => {
  return (
    <StyledP className={className}>
      {label} <StyledLink to={linkTo}>{linkText}</StyledLink>
    </StyledP>
  );
};

const StyledSuggestion = styled(Suggestion)``;

export default StyledSuggestion;
