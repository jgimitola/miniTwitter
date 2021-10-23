import StyledNavButton from "../../../lib/ui/StyledNavButton";

const NavButton = ({ className, active, ...rest }) => {
  return <StyledNavButton className={className} active={active} {...rest} />;
};

export default NavButton;
