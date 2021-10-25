import { useEffect, useState } from "react";

import tweetService from "../../../services/tweetService";
import { RightSidebar, TrendContainer, SearchBar } from "./styled";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";
import TrendingCard from "../../common/TrendingCard";

const Aside = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTrendings = async () => {
    const res = await tweetService.getTrendings("JoeBiden");
    try {
      setTweets(res.data.slice(0, 10));
    } catch (err) {
      setTweets([]);
    }
  };

  useEffect(() => {
    fetchTrendings();
  }, []);

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
        {tweets?.length > 0 ? (
          tweets.map((tweet, i) => (
            <TrendingCard
              key={i}
              user={{ name: "Joe Biden", username: "JoeBiden" }}
              createdAt={tweet.created_at}
              content={tweet.text}
            />
          ))
        ) : (
          <p>There are no tweets</p>
        )}
      </TrendContainer>
    </RightSidebar>
  );
};

export default Aside;
