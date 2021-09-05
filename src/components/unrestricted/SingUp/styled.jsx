import styled from "styled-components";

import StyledSuggestion from "../../../lib/ui/StyledSuggestion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  ${StyledSuggestion} {
    margin-top: 2rem;
  }
`;

export const FormContainer = styled.div`
  margin-top: 2rem;
`;
