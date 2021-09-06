import { css } from "styled-components";

export const WrapperMixin = ({ flexDirection, width }) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: center;
  justify-content: center;
  width: ${width};

  min-height: 100vh;
`;

export default WrapperMixin;
