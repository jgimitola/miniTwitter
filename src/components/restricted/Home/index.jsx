import Page from "../../common/Page";
import Timeline from "./../Timeline/index";

const Home = ({ meta, setMainTarget, ...rest }) => {
  return (
    <Page title="Home" meta={meta} setMainTarget={setMainTarget}>
      <Timeline>/</Timeline>
    </Page>
  );
};

export default Home;
