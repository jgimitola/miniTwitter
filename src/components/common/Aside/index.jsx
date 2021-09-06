import { RightSidebar, TrendContainer, SearchBar } from "./styled";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";

const Aside = () => {
  return (
    <RightSidebar>
      <SearchBar>
        <label htmlFor="searchBar">
          <SearchIcon />
        </label>
        <input id="searchBar" placeholder="Search..." type="search" />
      </SearchBar>
      <TrendContainer>
        <h2>Trends</h2>
      </TrendContainer>
    </RightSidebar>
  );
};

export default Aside;
