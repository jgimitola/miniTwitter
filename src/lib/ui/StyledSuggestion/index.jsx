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

const Container = styled.div`
  & ${StyledP} {
    margin-top: 2rem;
  }
`;

const StyledSuggestion = {
  StyledLink,
  StyledP,
  Container,
};

export default StyledSuggestion;
