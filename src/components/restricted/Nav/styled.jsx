import styled from "styled-components";
import StyledButton from "../../../lib/ui/StyledButton";
export const Container = styled.nav`
  & ul {
    list-style: none;
  }

  & ${StyledButton} {
    margin-top: 1rem;
    border-radius: 100px;
    min-width: 0px;
    width: 180px;
  }
`;
