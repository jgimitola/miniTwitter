import styled from "styled-components";
import { Link } from "react-router-dom";

import { primary, labelNav_black, navButtonsHover_gray } from "../colors";

const StyledLink = styled(Link)`
  font-weight: normal;
  font-size: 22px;
  text-decoration: none;
  color: ${labelNav_black};

  display: inline-block;
  & svg {
    margin-right: 1rem;
  }

  &:focus {
    color: ${primary};
    font-weight: bold;
  }

  &:focus svg {
    fill: ${primary};
    stroke: ${primary};
  }
`;

const Container = styled.div`
  border-radius: 100px;
  padding: 0.7rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${navButtonsHover_gray};
  }
`;

const Button = ({ className, SvgIcon, buttonLabel, linkTo }) => {
  return (
    <StyledLink to={linkTo}>
      <Container className={className}>
        <SvgIcon />
        {buttonLabel}
      </Container>
    </StyledLink>
  );
};

const StyledNavButton = styled(Button)``;

export default StyledNavButton;
