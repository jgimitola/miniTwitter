import Page from "../../common/Page";

const Messages = ({ meta, setMainTarget, ...rest }) => {
  return (
    <Page title="Messages" meta={meta} setMainTarget={setMainTarget}></Page>
  );
};

export default Messages;
