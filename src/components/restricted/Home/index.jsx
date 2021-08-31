import { Link } from "react-router-dom";

const Home = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}

      <h1>Home</h1>
      <form action="#">
        <input type="search" name="searchbar" id="searchbar" />
        <Link to="/search/results">
          <button>Search</button>
        </Link>
      </form>
      <p id="write-tweet">Write what yout think</p>
      <textarea
        placeholder="Write a tweet"
        aria-describedby="write-tweet"
      ></textarea>
    </div>
  );
};

export default Home;
