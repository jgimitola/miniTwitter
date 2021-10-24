import { useContext, useState } from "react";

import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router";
import navButtons from "../../../lib/navButtons";

import NavButton from "../NavButton";
import LogOutNavButton from "../LogOutNavButton";
import Button from "../Button";
import TwitterLogo from "../TwitterLogo";
import { Sidebar } from "./styled";
import { success } from "../../../lib/ui/Toasts";

const Nav = ({ setIsOpen, ...rest }) => {
  const [buttons, setButtons] = useState(navButtons);
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleActiveButton = (buttonLabel) => {
    const position = buttons.map((b) => b.buttonLabel).indexOf(buttonLabel);
    const newButtons = buttons.map((b, i) => {
      const newB = { ...b };
      if (i === position) {
        newB.active = true;
      } else {
        newB.active = false;
      }
      return newB;
    });
    setButtons(newButtons);
  };

  const handleLogout = () => {
    success("Logged Out!");
    setTimeout(() => {
      logout();
      history.push("/");
    }, 1000);
  };

  return (
    <Sidebar>
      <TwitterLogo
        size="xs"
        titleDisplay="none"
        redirectTo="/home"
        onClick={() => {
          handleActiveButton("Home");
        }}
      />

      {buttons.map(({ SvgIcon, buttonLabel, linkTo, active }) => {
        return (
          <NavButton
            key={buttonLabel}
            SvgIcon={SvgIcon}
            buttonLabel={buttonLabel}
            linkTo={linkTo}
            active={active}
            onClick={() => {
              handleActiveButton(buttonLabel);
            }}
          />
        );
      })}
      <LogOutNavButton buttonLabel="Log Out" onClick={handleLogout} />
      <Button
        primary
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Tweet
      </Button>
    </Sidebar>
  );
};
export default Nav;
