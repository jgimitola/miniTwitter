import NavButton from "../NavButton";
import Button from "../Button";
import TwitterLogo from "../TwitterLogo";
import navButtons from "../../../lib/navButtons";
import { Sidebar } from "./styled";

const Nav = () => {
  return (
    <Sidebar>
      <TwitterLogo size="xs" titleDisplay="none" />

      {navButtons.map(({ SvgIcon, buttonLabel, linkTo }) => {
        return (
          <NavButton
            key={buttonLabel}
            SvgIcon={SvgIcon}
            buttonLabel={buttonLabel}
            linkTo={linkTo}
          />
        );
      })}

      <Button primary>Tweet</Button>
    </Sidebar>
  );
};
export default Nav;
