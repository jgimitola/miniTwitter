import styled from "styled-components";

import StyledSuggestion from "../../../lib/ui/StyledSuggestion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  ${StyledSuggestion}:last-child {
    margin-top: 2rem;
  }
`;
