import StyledNavButton from "../../../lib/ui/StyledNavButton";

const NavButton = ({ className, ...rest }) => {
  return <StyledNavButton className={className} {...rest}/>;
};

export default NavButton;
