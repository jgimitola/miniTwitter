import styled, { css } from "styled-components";

import { primary } from "../colors";
import { ReactComponent as TwitterIcon } from "../../../images/twitter_logo.svg";

const Title = styled.h4`
  ${({ titleDisplay }) =>
    titleDisplay === "none" &&
    css`
      display: none;
    `}
`;

const Icon = styled(TwitterIcon)`
  width: ${({ size }) => {
    return size === "sm" ? "64px" : "512px";
  }};
  height: auto;
  fill: ${({ variant }) => {
    return variant === "white" ? "white" : primary;
  }};

  max-width: 100%;
  max-height: 100%;
`;

const TwitterLogo = ({ className, size, variant, titleDisplay }) => {
  return (
    <div className={className}>
      <Icon size={size} variant={variant} />
      <Title titleDisplay={titleDisplay}>MiniTwitter</Title>
    </div>
  );
};

const StyledTwitterLogo = styled(TwitterLogo)`
  display: block;
  box-sizing: border-box;
`;

export default StyledTwitterLogo;
