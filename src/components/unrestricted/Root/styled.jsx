import styled, { css } from "styled-components";

import { primary } from "../../../lib/ui/colors";
import StyledTwitterLogo from "../../../lib/ui/StyledTwitterLogo";
import StyledSuggestion from "../../../lib/ui/StyledSuggestion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.backgroundColor === "blue" &&
    css`
      background-color: ${primary};
    `}

  width: 50vw;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;

  ${Container}:first-child {
    box-sizing: border-box;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  ${Container}:first-child ${StyledTwitterLogo} {
    max-width: 100%;
    max-height: 100%;    
  }

  @media (max-width: 768px) {
    ${Container} {
      width: 100%;
    }

    ${Container}:first-child {
      display: none;
    }
  }
`;

export const FormContainer = styled.div`
  ${StyledTwitterLogo} {
    text-align: center;
  }

  ${StyledSuggestion} {
    margin-top: 2rem;
  }
`;
