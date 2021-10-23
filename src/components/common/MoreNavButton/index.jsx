import StyledNavButton from "./styled";

const MoreNavButton = ({ className, active, ...rest }) => {
  return <StyledNavButton className={className} active={active} {...rest} />;
};

export default MoreNavButton;
