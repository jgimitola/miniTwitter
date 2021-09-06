import styled from "styled-components";
import StyledSuggestion from "../../../lib/ui/StyledSuggestion";
import WrapperMixin from "../../../lib/ui/WrapperMixin";

export const Main = styled.main`
  ${WrapperMixin({ flexDirection: "column", width: "100vw" })}

  ${StyledSuggestion} {
    margin-top: 4rem;
  }

  & > div {
    margin-top: 2rem;
  }
`;
