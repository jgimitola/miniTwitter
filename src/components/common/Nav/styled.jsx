import styled from "styled-components";

import StyledButton from "../../../lib/ui/StyledButton";
import StyledTwitterLogo from "../../../lib/ui/StyledTwitterLogo";
import { border_gray } from "../../../lib/ui/colors";

export const Sidebar = styled.nav`
  border-right: 1px solid ${border_gray};
  flex: 0.3;

  padding-left: 20px;
  padding-right: 20px;

  align-content: center;

  & ${StyledTwitterLogo} {
    width: 60px;
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  & ${StyledButton} {
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
    width: 8rem;    
  }

  & ${StyledButton} svg {
    display: none;
  }

  @media (max-width: 768px) {
    & ${StyledTwitterLogo} {
      padding-left: 20px;
    }

    ${StyledButton} {
      font-size: 0;
      width: 5rem;
    }

    ${StyledButton} svg {
      display: inline;
    }
  }

  @media (max-width: 1024px) {
    & {
      flex: 0.3;
    }
  }
`;
