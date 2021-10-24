import { useEffect, useContext } from "react";

import { TweetContext } from "../../../context/TweetContext";
import NewTweet from "./../NewTweet";
import TweetCard from "../../common/TweetCard";
import { Center } from "./styled";

const Tweets = () => {
  const { tweets, getTweets } = useContext(TweetContext);

  useEffect(() => {
    getTweets();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NewTweet />
      {tweets?.length > 0 ? (
        tweets.map((tweet, i) => (
          <TweetCard key={tweet._id} tweet={tweet}/>
        ))
      ) : (
        <Center>There are no tweets</Center>
      )}
    </>
  );
};

export default Tweets;
