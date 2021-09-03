import styled from "styled-components";

import { primary } from "../../../lib/ui/colors";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.backgroundColor === "blue") {
      return `background-color: ${primary}`;
    }
  }};

  width: 100vw;
  height: 100vh;
`;
