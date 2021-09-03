import StyledButton from "../../../lib/ui/StyledButton";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
