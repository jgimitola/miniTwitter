import styled, { css } from "styled-components";

import StyledSuggestion from "./lib/ui/StyledSuggestion";
import WrapperMixin from "./lib/ui/WrapperMixin";

export const Main = styled.div`
  ${(props) => {
    switch (props.mainTarget) {
      case "root":
        return css`
          display: flex;
        `;

      case "login":
        return css`
          ${WrapperMixin({ flexDirection: "column", width: "100vw" })}

          ${StyledSuggestion}:last-child {
            margin-top: 2rem;
          }

          & > div {
            margin-top: 2rem;
          }
        `;

      case "signup":
        return css`
          ${WrapperMixin({
            flexDirection: "column",
            width: "100vw",
          })}

          ${StyledSuggestion} {
            margin-top: 2rem;
          }

          & > div {
            margin-top: 2rem;
          }
        `;

      case "passwordrecovery":
        return css`
          ${WrapperMixin({ flexDirection: "column", width: "100vw" })}

          ${StyledSuggestion} {
            margin-top: 4rem;
          }

          & > div {
            margin-top: 2rem;
          }
        `;

      default:
        return css`
          display: flex;

          height: 100vh;
          max-width: 1300px;

          margin-left: auto;
          margin-right: auto;
          padding: 0 10px;
        `;
    }
  }}
`;
