import styled from "styled-components";

import { primary, gray } from "../colors";

const StyledButton = styled.button`
  padding: 1em 0;
  min-width: 21em;

  font-size: 1rem;
  font-weight: 700;

  ${(props) => {
    if (props.primary) {
      return `
      text-align: center;
        color: white;
        background-color: ${primary};
        border-color: transparent;
        text-
        &:hover {            
            background-color: white;            
        }
      `;
    } else if (props.secondary) {
      return `
        color: white;
        background-color: ${gray};
        border-color: transparent;
        text-align: center;
        &:hover {            
           color: ${gray}70;            
        }
      `;
    } else {
      return `
        color: ${primary};
        background-color: white;
        border-color: ${primary};
        text-align: center;
        &:hover {            
            color: ${gray};            
            border-color: ${gray};
        }
      `;
    }
  }};

  border-radius: 5px;
  border-style: solid;
  cursor: pointer;
`;

export default StyledButton;
