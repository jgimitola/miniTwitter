import StyledField from "../../../lib/ui/StyledField";

const Field = ({ className, ...rest }) => {
  return <StyledField className={className} {...rest} />;
};

export default Field;
