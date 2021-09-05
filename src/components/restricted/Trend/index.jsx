import Nav from "../Nav";
const Trend = (props) => {
  const meta = props.meta;

  return (
    <>
      {meta}
      <Nav />
      <h1>Trending page</h1>
    </>
  );
};

export default Trend;
