import Page from "../../common/Page";

const Bookmarks = ({ meta, setMainTarget, ...rest }) => {
  return (
    <Page title="Bookmarks" meta={meta} setMainTarget={setMainTarget}></Page>
  );
};

export default Bookmarks;
