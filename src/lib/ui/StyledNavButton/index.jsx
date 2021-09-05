import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { primary, gray } from "../colors";

const Container = styled.div``;

const StyledLink = styled(Link)``;

const Button = ({ className, SvgIcon, buttonLabel, linkTo }) => {
  return (
    <Container className={className}>
      <StyledLink to={linkTo}>{buttonLabel}</StyledLink>
    </Container>
  );
};

const StyledNavButton = styled(Button)``;

export default StyledNavButton;
