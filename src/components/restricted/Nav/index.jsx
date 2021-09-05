import NavButton from "../../common/NavButton";
import navButtons from "../../../lib/navButtons";
import TwitterLogo from "../../common/TwitterLogo";
import { Container } from "./styled";
const Nav = () => {
  return (
    <Container>
      <ul>
        <TwitterLogo size="xs" titleDisplay="none" />
        {navButtons.map(({ SvgIcon, buttonLabel, linkTo }) => {
          return (
            <li>
              <NavButton
                SvgIcon={SvgIcon}
                buttonLabel={buttonLabel}
                linkTo={linkTo}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default Nav;
