import StyledButton from "../../../lib/ui/StyledButton";

const Button = ({ className, children, ...rest }) => {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
