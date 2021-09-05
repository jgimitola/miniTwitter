import Nav from "../Nav";
const Home = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}
      <Nav />
    </div>
  );
};

export default Home;
