import NavButton from "../../common/NavButton";
import navButtons from "../../../lib/navButtons";
import TwitterLogo from "../../common/TwitterLogo";
import Button from "../../common/Button";
import { Container } from "./styled";
const Nav = () => {
  return (
    <Container>
      <ul>
        <li>
          <TwitterLogo size="xs" titleDisplay="none" />
        </li>
        {navButtons.map(({ SvgIcon, buttonLabel, linkTo }) => {
          return (
            <li key={buttonLabel}>
              <NavButton
                SvgIcon={SvgIcon}
                buttonLabel={buttonLabel}
                linkTo={linkTo}
              />
            </li>
          );
        })}
        <li>
          <Button primary>Tweet</Button>
        </li>
      </ul>
    </Container>
  );
};
export default Nav;
