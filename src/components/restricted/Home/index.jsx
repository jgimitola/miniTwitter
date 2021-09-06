import Nav from "../Nav";
import { Container } from "./styled";
import { SearchContainer, SearchInput, IconButton } from "./SearchBar";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";

const Home = (props) => {
  const meta = props.meta;

  return (
    <Container>
      {meta}
      <Nav />
      <SearchContainer>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <SearchInput />
      </SearchContainer>
    </Container>
  );
};

export default Home;
