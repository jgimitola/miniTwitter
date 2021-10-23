import StyledNavButton from "./styled";

const LogOutNavButton = ({ className, active, ...rest }) => {
  return <StyledNavButton className={className} active={active} {...rest} />;
};

export default LogOutNavButton;
