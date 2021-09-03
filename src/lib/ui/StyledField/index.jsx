import styled from "styled-components";

import { label_gray, border_gray } from "../colors";

const Input = styled.input.attrs(() => ({
  required: true,
}))`
  font-size: 0.875rem;
  padding: 1em 1.3em;
  display: block;
  min-width: 21em;
  border: 1px solid ${border_gray};

  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: ${label_gray};

  line-height: 1rem;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 32px;
  transition: 0.2s ease all;
  input:focus ~ &,
  input:not(:placeholder-shown).input:not(:focus) ~ .label,
  input:valid ~ & {
    top: -5px;
    left: 0px;
    font-size: 16px;
    color: ${label_gray};
  }
`;

const Container = styled.div`
  position: relative;
  min-width: 21em;
  padding: 1em 0;
`;

const StyledField = {
  Container,
  Input,
  Label,
};

export default StyledField;
