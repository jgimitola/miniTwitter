import Page from "../../common/Page";

const Profile = ({ meta, setMainTarget, ...rest }) => {
  return (
    <Page title="Profile" meta={meta} setMainTarget={setMainTarget}></Page>
  );
};

export default Profile;
