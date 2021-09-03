import styled from "styled-components";

import { primary } from "../colors";
import { ReactComponent as twitter_logo } from "../../../images/twitter_logo.svg";

const StyledTwitterLogo = styled(twitter_logo)`
  width: ${(props) => {
    return props.size === "sm" ? "64px" : "512px";
  }};
  height: auto;
  fill: ${(props) => {
    return props.white ? "white" : primary;
  }};
`;

export default StyledTwitterLogo;
