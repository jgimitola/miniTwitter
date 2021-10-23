import styled, { css } from "styled-components";
import { useHistory } from "react-router";

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
    if (size === "sm") {
      return "64px";
    } else {
      if (size === "lg") {
        return "512px";
      } else {
        return "30px";
      }
    }
  }};
  height: auto;
  fill: ${({ variant }) => (variant === "white" ? "white" : primary)};
  max-width: 100%;
  max-height: 100%;
`;

const TwitterLogo = ({
  className,
  size,
  variant,
  redirectTo,
  titleDisplay,
  ...rest
}) => {
  const history = useHistory();

  return (
    <div className={className} {...rest}>
      <Icon
        size={size}
        variant={variant}
        onClick={() => {
          if (redirectTo) {
            history.push(redirectTo);
          }
        }}
      />
      <Title titleDisplay={titleDisplay}>MiniTwitter</Title>
    </div>
  );
};

const StyledTwitterLogo = styled(TwitterLogo)`
  display: block;
  box-sizing: border-box;

  ${Icon} {
    cursor: ${({ redirectTo }) => (redirectTo ? "pointer" : "default")};
  }
`;

export default StyledTwitterLogo;
