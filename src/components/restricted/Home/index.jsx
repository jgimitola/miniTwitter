import Nav from "../Nav";
import { Container } from "./styled";
const Home = (props) => {
  const meta = props.meta;

  return (
    <Container>
      {meta}
      <Nav />
      <aside>Hola</aside>
    </Container>
  );
};

export default Home;
