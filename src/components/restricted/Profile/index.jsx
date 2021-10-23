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
          src="https://pbs.twimg.com/profile_images/1279589529012383745/5RZMRIRd_400x400.jpg"
          alt=""
        />
        <Name>{user.name}</Name>
        <Username>@{user.username}</Username>
      </Wrapper>
    </Page>
  );
};

export default Profile;
