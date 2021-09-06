import styled from "styled-components";
import { Link } from "react-router-dom";

import { primary, labelNav_black } from "../colors";

const SidebarButton = styled(Link)`
  text-decoration: none;
  color: ${labelNav_black};

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e8f5fe;
    border-radius: 30px;
    color: ${primary};
    transition: color 100ms ease-out;
  }

  & svg {
    padding: 20px;
  }

  & h2 {
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    & > h2 {
      display: none;
    }
    justify-content: center;
  }
`;

const Button = ({ className, SvgIcon, buttonLabel, linkTo }) => {
  return (
    <SidebarButton className={className} to={linkTo}>
      <SvgIcon />
      <h2>{buttonLabel}</h2>
    </SidebarButton>
  );
};

const StyledNavButton = styled(Button)``;

export default StyledNavButton;
