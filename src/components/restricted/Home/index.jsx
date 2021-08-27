import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { generateMeta } from "../../../lib/routes";

const Home = () => {
  const meta = generateMeta("/home");

  return (
    <div>
      <Helmet>{meta}</Helmet>

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
