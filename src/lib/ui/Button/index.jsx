import styled from "styled-components";

import { primary, gray } from "../colors";

const Button = styled.button`
  padding: 1em 0;
  min-width: 21em;

  font-size: 1rem;
  font-weight: 700;

  ${(props) => {
    if (props.primary) {
      return `
        color: white;
        background-color: ${primary};
        border-color: transparent;

        &:hover {            
            background-color: ${primary}50;            
        }
      `;
    } else if (props.secondary) {
      return `
        color: white;
        background-color: ${gray};
        border-color: transparent;

        &:hover {            
            background-color: ${gray}70;            
        }
      `;
    } else {
      return `
        color: ${primary};
        background-color: white;
        border-color: ${primary};

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

export default Button;
