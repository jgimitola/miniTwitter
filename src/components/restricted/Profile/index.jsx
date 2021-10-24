import Page from "../../common/Page";
import { useContext } from "react";

import { Wrapper, Picture, Name, Username } from "./styled";
import { AuthContext } from "../../../context/AuthContext";

const Profile = ({ meta, setMainTarget, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Page title="Profile" meta={meta} setMainTarget={setMainTarget}>
      <Wrapper>
        <Picture
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt=""
        />
        <Name>{user.name}</Name>
        <Username>@{user.username}</Username>
      </Wrapper>
    </Page>
  );
};

export default Profile;
