import styled from "styled-components";

import { primary } from "../colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.backgroundColor === "blue") {
      return `background-color: ${primary}`;
    }
  }};

  width: 50vw;
  height: 100vh;
`;

export default Container;
