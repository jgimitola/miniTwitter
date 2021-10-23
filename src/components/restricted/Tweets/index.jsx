import { useEffect } from "react";

import { useTweets } from "./../../../hooks/useTweets";
import NewTweet from "./../NewTweet";
import TweetCard from "../../common/TweetCard";

const Tweets = () => {
  const { tweets, removeTweet, addTweet, getTweets } = useTweets();

  useEffect(() => {
    getTweets();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NewTweet addTweet={addTweet} />
      {tweets?.length > 0 ? (
        tweets.map((tweet) => (
          <TweetCard key={tweet._id} tweet={tweet} removeTweet={removeTweet} />
        ))
      ) : (
        <p>no data</p>
      )}
    </>
  );
};

export default Tweets;
