import styled, { css } from "styled-components";

import { primary, labelNav_black } from "../../../lib/ui/colors";
import { ReactComponent as LogOutIcon } from "../../../images/logout.svg";

const SidebarButtonMenu = styled.div`
  text-decoration: none;
  color: ${labelNav_black};

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e8f5fe;
    border-radius: 30px;
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

const Button = ({
  className,
  SvgIcon,
  buttonLabel,
  linkTo,
  active,
  ...rest
}) => {
  return (
    <SidebarButtonMenu className={className} {...rest}>
      <LogOutIcon />
      <h2>{buttonLabel}</h2>
    </SidebarButtonMenu>
  );
};

const StyledNavButton = styled(Button)`
  ${(props) =>
    props.active &&
    css`
      color: ${primary};

      svg {
        fill: ${primary};
        stroke: ${primary};
      }
    `}
`;

export default StyledNavButton;
