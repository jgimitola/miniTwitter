import { useState } from "react";

import NavButton from "../NavButton";
import MoreNavButton from "../../common/MoreNavButton";
import Button from "../Button";
import TwitterLogo from "../TwitterLogo";
import navButtons from "../../../lib/navButtons";
import { Sidebar } from "./styled";

const Nav = () => {
  const [buttons, setButtons] = useState(navButtons);

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
      <MoreNavButton buttonLabel={"More"} />
      <Button primary>Tweet</Button>
    </Sidebar>
  );
};
export default Nav;
