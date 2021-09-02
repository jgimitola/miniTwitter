import Link from "../../../lib/ui/Link"; //THIS IS A STYLED COMPONENT
import SuggestionP from "../SuggestionP";

const Suggestion = (props) => {
  const { label, linkText, linkTo } = props;
  return (
    <SuggestionP>
      {label} <Link to={linkTo}>{linkText}</Link>
    </SuggestionP>
  );
};

export default Suggestion;
