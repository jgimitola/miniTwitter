import styled, { css } from "styled-components";

import { primary, gray } from "../colors";

const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 1em 2em;
  width: 100%;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: ${primary};
      border-color: transparent;

      &:hover {
        background-color: ${primary}50;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: white;
      background-color: ${gray};
      border-color: transparent;

      &:hover {
        background-color: ${gray}70;
      }
    `}

  ${(props) =>
    props.white &&
    css`
      color: ${primary};
      background-color: white;
      border-color: ${primary};

      &:hover {
        color: ${gray};
        border-color: ${gray};
      }
    `}

  border-radius: 5px;
  border-style: solid;
  cursor: pointer;
`;

export default StyledButton;
