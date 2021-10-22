import styled, { css } from "styled-components";

import { primary } from "../../../lib/ui/colors";
import StyledTwitterLogo from "../../../lib/ui/StyledTwitterLogo";
import StyledSuggestion from "../../../lib/ui/StyledSuggestion";
import WrapperMixin from "../../../lib/ui/WrapperMixin";

export const Wrapper = styled.div`
  ${WrapperMixin({
    flexDirection: "row",
    width: "50vw",
  })}

  ${(props) =>
    props.backgroundColor === "blue" &&
    css`
      background-color: ${primary};
    `}
    
    &:first-child {
    box-sizing: border-box;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  &:first-child ${StyledTwitterLogo} {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 768px) {
    & {
      width: 100%;
    }

    &:first-child {
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
